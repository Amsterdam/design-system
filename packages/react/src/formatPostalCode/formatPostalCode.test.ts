/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatPostalCode } from './formatPostalCode'

describe('formatPostalCode', () => {
  it('formats a postal code without a space', () => {
    expect(formatPostalCode('1014ba')).toBe('1014 BA')
  })

  it('formats a postal code with a space', () => {
    expect(formatPostalCode('1014 ba')).toBe('1014 BA')
  })

  it('uppercases the letters', () => {
    expect(formatPostalCode('1234ab')).toBe('1234 AB')
  })

  it('keeps an already formatted postal code unchanged', () => {
    expect(formatPostalCode('1014 BA')).toBe('1014 BA')
  })

  it('trims surrounding whitespace', () => {
    expect(formatPostalCode('  1014ba  ')).toBe('1014 BA')
  })

  it('returns invalid input unchanged', () => {
    expect(formatPostalCode('123')).toBe('123')
    expect(formatPostalCode('12345 AB')).toBe('12345 AB')
    expect(formatPostalCode('')).toBe('')
  })
})
