/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatIban } from './formatIban'

describe('formatIban', () => {
  it('formats an IBAN without spaces', () => {
    expect(formatIban('NL70TRIO0123456789')).toBe('NL70 TRIO 0123 4567 89')
  })

  it('formats an IBAN with spaces', () => {
    expect(formatIban('NL70 TRIO 0123 4567 89')).toBe('NL70 TRIO 0123 4567 89')
  })

  it('uppercases the country code and bank name', () => {
    expect(formatIban('nl70trio0123456789')).toBe('NL70 TRIO 0123 4567 89')
  })

  it('handles mixed case and irregular spacing', () => {
    expect(formatIban('nl70 Trio 01234567 89')).toBe('NL70 TRIO 0123 4567 89')
  })

  it('returns invalid input unchanged', () => {
    expect(formatIban('NL70TRIO012345678')).toBe('NL70TRIO012345678')
    expect(formatIban('DE89370400440532013000')).toBe('DE89370400440532013000')
    expect(formatIban('')).toBe('')
  })

  describe('returns an empty string for non-string input', () => {
    const formatIbanUnchecked = formatIban as unknown as (iban: unknown) => string

    it('for null', () => {
      expect(formatIbanUnchecked(null)).toBe('')
    })

    it('for undefined', () => {
      expect(formatIbanUnchecked(undefined)).toBe('')
    })
  })
})
