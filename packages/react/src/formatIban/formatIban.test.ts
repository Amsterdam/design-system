/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatIban } from './formatIban'

describe('formatIban', () => {
  it('formats an IBAN without spaces', () => {
    expect(formatIban('NL21TRIO0123456789')).toBe('NL21 TRIO 0123 4567 89')
  })

  it('formats an IBAN with spaces', () => {
    expect(formatIban('NL21 TRIO 0123 4567 89')).toBe('NL21 TRIO 0123 4567 89')
  })

  it('uppercases the country code and bank name', () => {
    expect(formatIban('nl21trio0123456789')).toBe('NL21 TRIO 0123 4567 89')
  })

  it('handles mixed case and irregular spacing', () => {
    expect(formatIban('nl21 Trio 01234567 89')).toBe('NL21 TRIO 0123 4567 89')
  })

  it('returns invalid input unchanged', () => {
    expect(formatIban('NL21TRIO012345678')).toBe('NL21TRIO012345678')
    expect(formatIban('DE89370400440532013000')).toBe('DE89370400440532013000')
    expect(formatIban('')).toBe('')
  })
})
