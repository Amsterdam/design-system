/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatShadowValue } from './formatShadowValue'

describe('formatShadowValue', () => {
  it('formats a shadow with dimension objects', () => {
    expect(
      formatShadowValue({
        blur: { unit: 'px', value: 4 },
        color: '#000000',
        offsetX: { unit: 'rem', value: 0 },
        offsetY: { unit: 'px', value: 2 },
        spread: { unit: 'px', value: 0 },
      }),
    ).toBe('0rem 2px 4px 0px #000000')
  })

  it('formats a shadow with string sub-values', () => {
    expect(
      formatShadowValue({
        blur: '4px',
        color: 'red',
        offsetX: '0',
        offsetY: '2px',
        spread: '0',
      }),
    ).toBe('0 2px 4px 0 red')
  })

  it('prepends inset when the shadow is inset', () => {
    expect(
      formatShadowValue({
        blur: { unit: 'rem', value: 0 },
        color: 'blue',
        inset: true,
        offsetX: { unit: 'rem', value: 0 },
        offsetY: { unit: 'rem', value: 0 },
        spread: { unit: 'px', value: 3 },
      }),
    ).toBe('inset 0rem 0rem 0rem 3px blue')
  })

  it('omits inset when it is false', () => {
    expect(
      formatShadowValue({
        blur: '0',
        color: 'black',
        inset: false,
        offsetX: '1px',
        offsetY: '1px',
        spread: '0',
      }),
    ).toBe('1px 1px 0 0 black')
  })
})
