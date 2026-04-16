/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatSubValue } from './formatSubValue'

describe('formatSubValue', () => {
  it('formats a dimension object into a string', () => {
    expect(formatSubValue({ unit: 'px', value: 16 })).toBe('16px')
  })

  it('formats a zero dimension', () => {
    expect(formatSubValue({ unit: 'rem', value: 0 })).toBe('0rem')
  })

  it('returns a string value unchanged', () => {
    expect(formatSubValue('2px')).toBe('2px')
  })

  it('returns a reference string unchanged', () => {
    expect(formatSubValue('{ams.border.width.s}')).toBe('{ams.border.width.s}')
  })
})
