/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { findMultiValueDimensions, splitValues } from './multiValueDimensions.js'

/**
 * Builds a token as the CSS platform hands it over, with its references already resolved.
 *
 * @param {string} path - The dot separated token path.
 * @param {string} value - The resolved value.
 * @param {object} [rest] - The type and deprecation fields to set.
 * @returns {object} The token.
 */
function token(path, value, rest = { $extensions: { 'nl.amsterdam.type': 'dimension' } }) {
  return { $value: value, name: path.replaceAll('.', '-'), path: path.split('.'), ...rest }
}

describe('splitValues', () => {
  it('reads a single value as one', () => {
    expect(splitValues('1rem')).toEqual(['1rem'])
  })

  it('splits two values on the whitespace between them', () => {
    expect(splitValues('0 1rem')).toEqual(['0', '1rem'])
  })

  it('keeps the arguments of a function together, since its commas do not separate values', () => {
    expect(splitValues('clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)')).toEqual([
      'clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)',
    ])
  })

  it('keeps a nested function together', () => {
    expect(splitValues('calc(clamp(1rem, 2vw, 2rem) + 2 * 1rem)')).toEqual(['calc(clamp(1rem, 2vw, 2rem) + 2 * 1rem)'])
  })

  it('splits a value that follows a function', () => {
    expect(splitValues('calc(1rem + 2rem) 3rem')).toEqual(['calc(1rem + 2rem)', '3rem'])
  })

  it('ignores whitespace inside a quoted string', () => {
    expect(splitValues(`'Amsterdam Sans'`)).toEqual([`'Amsterdam Sans'`])
  })

  it('ignores the whitespace around the values', () => {
    expect(splitValues('  0   1rem  ')).toEqual(['0', '1rem'])
  })
})

describe('findMultiValueDimensions', () => {
  it('reports a dimension that holds two values', () => {
    const found = findMultiValueDimensions([token('ams.dialog.header.padding-block', '1.5rem 0')])

    expect(found).toEqual([
      { name: 'ams-dialog-header-padding-block', path: 'ams.dialog.header.padding-block', value: '1.5rem 0' },
    ])
  })

  it('accepts a dimension that holds one value', () => {
    expect(findMultiValueDimensions([token('ams.dialog.gap', '1rem')])).toEqual([])
  })

  it('accepts a dimension whose single value is a calculation of several lengths', () => {
    expect(findMultiValueDimensions([token('ams.dialog.inline-size', 'calc(100% - 2 * 1.5rem)')])).toEqual([])
  })

  it('reports a dimension typed through the DTCG $type, which literal values use', () => {
    const tokens = [token('ams.dialog.body.padding-block', '0 1.5rem', { $type: 'dimension' })]

    expect(findMultiValueDimensions(tokens)).toHaveLength(1)
  })

  it('skips a deprecated token, which is frozen at the value it shipped with', () => {
    const tokens = [
      token('ams.dialog.header.padding-block', '1.5rem 0', {
        $deprecated: 'Use `ams.dialog.header.padding-block-start` instead. Will be removed on or after 2027-02-25.',
        $extensions: { 'nl.amsterdam.type': 'dimension' },
      }),
    ]

    expect(findMultiValueDimensions(tokens)).toEqual([])
  })

  it('skips a type that takes several values on purpose', () => {
    const tokens = [
      token('ams.typography.font-family', `'Amsterdam Sans', Arial, sans-serif`, {
        $extensions: { 'nl.amsterdam.type': 'fontFamily' },
      }),
      token('ams.description-list.grid-template-columns', 'minmax(0, 1fr) minmax(0, 4fr)', {
        $extensions: { 'nl.amsterdam.type': 'gridTemplateColumns' },
      }),
      token('ams.select.background-position', 'right 1rem center', {
        $extensions: { 'nl.amsterdam.type': 'backgroundPosition' },
      }),
    ]

    expect(findMultiValueDimensions(tokens)).toEqual([])
  })

  it('skips an untyped token, which the type inherited from the merged tree cannot speak for', () => {
    expect(findMultiValueDimensions([token('ams.dialog.container-name', 'a b', { $type: 'color' })])).toEqual([])
  })

  it('reports every offending token, so one build shows the whole set', () => {
    const tokens = [
      token('ams.dialog.header.padding-block', '1.5rem 0'),
      token('ams.dialog.gap', '1rem'),
      token('ams.select.padding-inline', '1rem calc(2 * 1rem + 1em)'),
    ]

    expect(findMultiValueDimensions(tokens).map(({ path }) => path)).toEqual([
      'ams.dialog.header.padding-block',
      'ams.select.padding-inline',
    ])
  })
})
