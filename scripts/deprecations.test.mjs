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
  assert.equal(
    report([marker], [{ ...marker, text: 'Remove 2027-05-25' }], '2026-10-22'),
    'No new deprecations or expired removal dates.',
  )
  assert.match(report([], [marker], '2026-10-22'), /## packages\/react\n\n- NEW Old/)
  assert.match(report([marker], [{ ...marker, text: 'Remove 2026-10-20' }], '2026-10-22'), /EXISTING Old.*Expired/)
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
