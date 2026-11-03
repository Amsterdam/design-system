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
  assert.deepEqual(extractMarkers('Pencil.tsx', '/** @deprecated Use Edit instead. */\nexport default SvgPencil'), [
    { name: 'Pencil', text: 'Use Edit instead.' },
  ])
  assert.deepEqual(extractMarkers('props.ts', '/** @deprecated Use `defaultExpanded`. */\nexpanded?: boolean'), [
    { name: 'expanded', text: 'Use `defaultExpanded`.' },
  ])
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
  assert.match(report([], [marker], '2026-10-22'), /NEW, per package[\s\S]*Old → Remove\s+2027-04-25/)
  const expired = report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22')
  assert.match(expired, /EXPIRED, from earlier releases: 1 entry/)
  assert.doesNotMatch(expired, /Old →/)
  assert.match(
    report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22', { includeExpired: true, verbose: true }),
    /Old → Remove\s+2026-10-20[\s\S]*packages\/react\/src\/Old\.tsx/,
  )
  assert.match(report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22'), /1 entry \(--expired/)
  assert.match(
    report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22', { includeExpired: true, verbose: true }),
    /^ {4}packages\/react\/src\/Old\.tsx$/m,
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

  assert.match(output, /padding-block-start and ams\.example\.padding-block-end\s+2027-04-02 \(Less than six months\)/)
  assert.match(output, /css: 11 markers without a removal date/)
  assert.equal(output.match(/11 markers without a removal date/g)?.length, 2)
  assert.doesNotMatch(output, /example-0\.scss/)
  assert.match(report([], [shortDate, ...undated], '2026-10-22', { verbose: true }), /example-0\.scss/)
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
