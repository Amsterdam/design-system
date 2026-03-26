/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatDate } from './formatDate'

/** The function typed to accept the runtime-invalid input that untyped JavaScript callers can still pass. */
const formatDateUnchecked = formatDate as unknown as (date?: unknown) => string

describe('formatDate', () => {
  it('formats a date in Dutch long-form notation', () => {
    expect(formatDate(new Date('2026-05-01T12:00:00Z'))).toBe('1 mei 2026')
  })

  it('formats a numeric timestamp', () => {
    expect(formatDate(new Date('2028-01-16T12:00:00Z').getTime())).toBe('16 januari 2028')
  })

  it('includes the weekday name', () => {
    expect(formatDate(new Date('2028-01-16T12:00:00Z'), { weekday: true })).toBe('zondag 16 januari 2028')
  })

  it('omits the weekday name when the option is false', () => {
    expect(formatDate(new Date('2028-01-16T12:00:00Z'), { weekday: false })).toBe('16 januari 2028')
  })

  describe('renders the Amsterdam-local day, independent of the runtime time zone', () => {
    it('formats a date-only value as its own calendar day', () => {
      // Midnight UTC is 01:00 in Amsterdam, still the 16th — the case that shifted a day before the pin.
      expect(formatDate(new Date('2028-01-16'))).toBe('16 januari 2028')
    })

    it('formats a late-evening UTC instant as the next Amsterdam day', () => {
      // 23:30 UTC is 00:30 the next day in Amsterdam.
      expect(formatDate(new Date('2028-01-16T23:30:00Z'))).toBe('17 januari 2028')
    })
  })

  describe('returns an empty string for invalid or missing input', () => {
    it('for undefined', () => {
      expect(formatDateUnchecked(undefined)).toBe('')
    })

    it('for null', () => {
      expect(formatDateUnchecked(null)).toBe('')
    })

    it('for an empty string', () => {
      expect(formatDateUnchecked('')).toBe('')
    })

    it('for a value that is not a number', () => {
      expect(formatDateUnchecked(NaN)).toBe('')
    })

    it('for a date string, which it does not parse', () => {
      expect(formatDateUnchecked('2028-01-16')).toBe('')
    })

    it('for an invalid Date', () => {
      expect(formatDate(new Date(NaN))).toBe('')
    })
  })
})
