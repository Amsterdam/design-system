/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { test } from 'node:test'

import { dateWarnings, extractMarkers, minimumRemovalDate, parseDate, report } from './deprecations.mjs'

test('extracts token paths, exported names, and bare CSS markers', () => {
  assert.deepEqual(extractMarkers('space.json', JSON.stringify({ ams: { space: { $deprecated: 'Use gap.' } } })), [
    { name: 'ams.space', text: 'Use gap.' },
  ])
  assert.deepEqual(
    extractMarkers(
      'CharacterCount.tsx',
      '/**\n * @deprecated Use `FormFieldStatus`.\n * Removed on 2027-04-25.\n */\nexport const CharacterCount = () => {}',
    ),
    [{ name: 'CharacterCount', text: 'Use `FormFieldStatus`. Removed on 2027-04-25.' }],
  )
  assert.deepEqual(extractMarkers('space.scss', '--ams-space /* @deprecated */, var(--ams-gap)'), [
    { name: '--ams-space', text: '' },
  ])
  assert.deepEqual(extractMarkers('space.scss', '.foo {\n  --ams-space: 1rem /* @deprecated */;\n}'), [
    { name: '--ams-space', text: '' },
  ])
  assert.deepEqual(
    extractMarkers(
      'CharacterCount.tsx',
      '/** @deprecated Use `FormFieldStatus` instead. @see {@link https://example.com} */\nexport const CharacterCount = () => {}',
    ),
    [{ name: 'CharacterCount', text: 'Use `FormFieldStatus` instead.' }],
  )
  assert.deepEqual(extractMarkers('Pencil.tsx', '/** @deprecated Use Edit instead. */\nexport default SvgPencil'), [
    { name: 'Pencil', text: 'Use Edit instead.' },
  ])
  assert.deepEqual(extractMarkers('props.ts', '/** @deprecated Use `defaultExpanded`. */\nexpanded?: boolean'), [
    { name: 'expanded', text: 'Use `defaultExpanded`.' },
  ])
})

test('identifies deprecated default re-export aliases independently', () => {
  const file = 'packages-proprietary/react-icons/src/index.ts'
  const source = `export {\n  /** @deprecated Use LinkedInIcon instead. Will be removed on or after 2027-04-01. */\n  default as LinkedinIcon,\n} from './LinkedIn'\nexport {\n  /** @deprecated Use NewNameIcon instead. Will be removed on or after 2027-05-01. */\n  default as OldNameIcon,\n} from './NewName'`
  const markers = extractMarkers(file, source).map((marker) => ({ ...marker, file }))

  assert.deepEqual(
    markers.map(({ name }) => name),
    ['LinkedinIcon', 'OldNameIcon'],
  )
  const output = report([{ file, name: 'index', text: 'Previous alias' }], markers, '2026-10-22')
  assert.match(output, /NEW, per package\n\n- react-icons/)
  assert.match(output, /`LinkedinIcon` → `LinkedInIcon`/)
  assert.match(output, /`OldNameIcon` → `NewNameIcon`/)
  assert.match(output, /FIX BEFORE RELEASING[\s\S]*LinkedinIcon/)
})

test('associates SCSS deprecations with every enclosing selector', () => {
  const source = `.ams-page-header__mega-menu-button-label,\n.ams-page-header__mega-menu-button-hidden-label {\n  /* @deprecated These class names will be removed on or after 2026-09-13. */\n}\n.ams-page-header__menu-icon-top {}`

  assert.deepEqual(extractMarkers('page-header.scss', source), [
    {
      name: '.ams-page-header__mega-menu-button-label',
      text: 'These class names will be removed on or after 2026-09-13.',
    },
    {
      name: '.ams-page-header__mega-menu-button-hidden-label',
      text: 'These class names will be removed on or after 2026-09-13.',
    },
  ])

  assert.deepEqual(extractMarkers('x.scss', '.a { color: red; }\n/* @deprecated Remove 2027-05-01 */\n.b {}'), [
    { name: '.b', text: 'Remove 2027-05-01' },
  ])
  assert.deepEqual(extractMarkers('x.scss', '.a {\n  /* @deprecated Remove 2027-05-01 */\n  --ams-old: 1px;\n}'), [
    { name: '--ams-old', text: 'Remove 2027-05-01' },
  ])
  assert.deepEqual(
    extractMarkers('x.scss', '.a {\n  @media (min-width: 1px) {\n    /* @deprecated Remove 2027-05-01 */\n  }\n}'),
    [{ name: '.a', text: 'Remove 2027-05-01' }],
  )
})

test('uses six calendar months, clamping the last day of a month', () => {
  assert.equal(minimumRemovalDate('2026-10-22'), '2027-04-22')
  assert.equal(minimumRemovalDate('2026-08-31'), '2027-02-28')
  assert.equal(minimumRemovalDate('2023-08-31'), '2024-02-29')
})

test('flags short, expired, and missing dates but accepts the exact boundary', () => {
  assert.deepEqual(dateWarnings('Remove 2027-04-21', '2026-10-22', true), ['Less than six months: 2027-04-21'])
  assert.deepEqual(dateWarnings('Remove 2027-04-22', '2026-10-22', true), [])
  assert.deepEqual(dateWarnings('Remove 2026-10-20', '2026-10-22', false), ['Expired: 2026-10-20'])
  assert.deepEqual(dateWarnings('Remove 2026-11-01', '2026-10-22', false), [])
  assert.deepEqual(dateWarnings('', '2026-10-22', true), ['No removal date'])
})

test('rejects invalid publication dates', () => {
  for (const value of ['2026-02-30', '2026-2-01', 'not-a-date']) {
    assert.throws(() => parseDate(value), /Invalid date/)
  }
})

test('does not treat a changed removal date as a new deprecation', () => {
  const marker = { file: 'packages/react/src/Old.tsx', name: 'Old', text: 'Remove 2027-04-25' }
  assert.match(report([marker], [{ ...marker, text: 'Remove 2027-05-25' }], '2026-10-22'), /No new deprecations\./)
  assert.match(report([], [marker], '2026-10-22'), /NEW, per package[\s\S]*2027-04-25 {7}`Old` → Remove/)
  const expired = report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22')
  assert.match(expired, /EXPIRED, from earlier releases: 1 entry/)
  assert.doesNotMatch(expired, /`Old` →/)
  assert.match(
    report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22', { includeExpired: true, verbose: true }),
    /2026-10-20 {7}react: `Old` → Remove \(Expired\)[\s\S]*packages\/react\/src\/Old\.tsx/,
  )
  assert.match(report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22'), /1 entry \(--expired/)
  assert.match(
    report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22', { includeExpired: true, verbose: true }),
    /^ {2}- `packages\/react\/src\/Old\.tsx`$/m,
  )
  assert.doesNotMatch(
    report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22', { includeExpired: true, verbose: true }),
    /react: +packages\/react/,
  )
})

test('summarises undated CSS markers and replacement pairs', () => {
  const shortDate = {
    file: 'packages-proprietary/tokens/src/example.tokens.json',
    name: 'ams.example.padding-block',
    text: 'Use `ams.example.padding-block-start` and `ams.example.padding-block-end` instead. Removed on or after 2027-04-02.',
  }
  const undated = Array.from({ length: 11 }, (_, index) => ({
    file: `packages/css/src/components/example-${index}.scss`,
    name: `.example-${index}`,
    text: '',
  }))
  const output = report([], [shortDate, ...undated], '2026-10-22')

  assert.match(
    output,
    /2027-04-02 {7}tokens: `ams\.example\.padding-block` → `ams\.example\.padding-block-start` and `ams\.example\.padding-block-end` \(Less than six months\)/,
  )
  assert.match(output, /^- css: 11 markers without a removal date$/m)
  assert.equal(output.match(/11 markers without a removal date/g)?.length, 2)
  assert.doesNotMatch(output, /example-0\.scss/)
  assert.match(report([], [shortDate, ...undated], '2026-10-22', { verbose: true }), /example-0\.scss/)
})

test('formats Markdown lists with aligned dates, code names, and prose descriptions', () => {
  const file = 'packages/react/src/Old.tsx'
  const markers = [
    { file, name: 'Old', text: 'Use New instead. Removed on or after 2027-05-01.' },
    { file, name: 'Quoted', text: 'Use `New` instead. Removed on or after 2027-05-01.' },
    { file, name: 'CurlyQuoted', text: 'Use ‘New’ instead. Removed on or after 2027-05-01.' },
    { file, name: 'Pair', text: 'Use ams.example.start and ams.example.end instead. Removed on or after 2027-05-01.' },
    { file, name: 'Prose', text: 'This token has no effect. Removed on or after 2027-05-01.' },
    { file, name: 'Undated', text: 'Use a `New` inside a `Container` instead.' },
    {
      file,
      name: 'CharacterCount',
      text: 'Compose a `FormFieldStatus.CharacterCount` inside a `FormFieldStatus` instead. The ‘CharacterCount’ component will be removed on or after 2027-05-01.',
    },
    { file: 'packages/css/src/old.scss', name: '--old', text: '' },
  ]
  const output = report([], markers, '2026-10-22', { verbose: true })

  assert.match(
    output,
    /## NEW, per package\n\n- react\n {2}- 2027-05-01 {7}`Old` → `New`\n {4}- `packages\/react\/src\/Old\.tsx`/,
  )
  assert.match(output, /`Quoted` → `New`/)
  assert.match(output, /`CurlyQuoted` → `New`/)
  assert.match(output, /`Pair` → `ams\.example\.start` and `ams\.example\.end`/)
  assert.match(output, /`Prose` → This token has no effect/)
  assert.match(output, /^ {2}- no removal date {2}`Undated` → a `New` inside a `Container`$/m)
  assert.match(
    output,
    /`CharacterCount` → Compose a `FormFieldStatus.CharacterCount` inside a `FormFieldStatus` instead/,
  )
  assert.doesNotMatch(output, /The ‘CharacterCount’ component/)
  assert.match(
    output,
    /- css\n {2}- css: 1 markers without a removal date\n {4}- no removal date {2}`--old` → \(bare marker\)\n {6}- `packages\/css\/src\/old\.scss`/,
  )
})

test('rejects missing arguments and unknown Git refs', () => {
  assert.throws(() => execFileSync(process.execPath, ['scripts/deprecations.mjs'], { stdio: 'pipe' }), /Command failed/)
  assert.throws(
    () =>
      execFileSync(
        process.execPath,
        ['scripts/deprecations.mjs', 'not-a-release-tag', '--publication-date', '2026-10-22'],
        { stdio: 'pipe' },
      ),
    /Command failed/,
  )
})
