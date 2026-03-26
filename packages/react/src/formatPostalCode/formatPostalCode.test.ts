/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatPostalCode } from './formatPostalCode'

/** The function typed to accept the runtime-invalid input that untyped JavaScript callers can still pass. */
const formatPostalCodeUnchecked = formatPostalCode as unknown as (postalCode: unknown) => string

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

  it('formats the unspaced, uppercase form that registries such as the BAG store', () => {
    expect(formatPostalCode('1018AN')).toBe('1018 AN')
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

  // The function formats any four digits followed by two letters on purpose: it does not check the
  // number range or the letter combination. A stricter check would reject postal codes that are real.
  describe('deliberately does not validate', () => {
    it('formats a postal code starting with a zero, as reserved for the Caribbean Netherlands', () => {
      expect(formatPostalCode('0000aa')).toBe('0000 AA')
    })

    it('formats a letter combination that was once excluded', () => {
      expect(formatPostalCode('1234ss')).toBe('1234 SS')
    })

    it('does not treat a hyphen as a separator', () => {
      expect(formatPostalCode('1014-BA')).toBe('1014-BA')
    })
  })

  describe('returns an empty string for non-string input', () => {
    it('for null', () => {
      expect(formatPostalCodeUnchecked(null)).toBe('')
    })

    it('for undefined', () => {
      expect(formatPostalCodeUnchecked(undefined)).toBe('')
    })
  })
})
