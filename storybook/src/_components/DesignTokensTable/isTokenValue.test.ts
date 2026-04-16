/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { isTokenValue } from './isTokenValue'

describe('isTokenValue', () => {
  it('returns true for an object with a $value key', () => {
    expect(isTokenValue({ $value: '#ff0000' })).toBe(true)
  })

  it('returns true when $value is a dimension object', () => {
    expect(isTokenValue({ $value: { unit: 'rem', value: 1 } })).toBe(true)
  })

  it('returns false for a plain string', () => {
    expect(isTokenValue('token')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isTokenValue(null)).toBe(false)
  })

  it('returns false for an object without $value', () => {
    expect(isTokenValue({ $type: 'color' })).toBe(false)
  })
})
