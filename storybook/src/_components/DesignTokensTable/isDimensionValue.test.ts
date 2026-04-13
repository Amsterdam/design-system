/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { isDimensionValue } from './isDimensionValue'

describe('isDimensionValue', () => {
  it('returns true for an object with value and unit', () => {
    expect(isDimensionValue({ unit: 'px', value: 16 })).toBe(true)
  })

  it('returns true when value is zero', () => {
    expect(isDimensionValue({ unit: 'rem', value: 0 })).toBe(true)
  })

  it('returns false for a string', () => {
    expect(isDimensionValue('16px')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isDimensionValue(null)).toBe(false)
  })

  it('returns false for an object missing unit', () => {
    expect(isDimensionValue({ value: 16 })).toBe(false)
  })

  it('returns false for an object missing value', () => {
    expect(isDimensionValue({ unit: 'px' })).toBe(false)
  })

  it('returns false when value is a string instead of a number', () => {
    expect(isDimensionValue({ unit: 'px', value: '16' })).toBe(false)
  })

  it('returns false when unit is a number instead of a string', () => {
    expect(isDimensionValue({ unit: 1, value: 16 })).toBe(false)
  })
})
