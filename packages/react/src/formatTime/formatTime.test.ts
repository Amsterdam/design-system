/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatTime, formatTimeRange } from './formatTime'

/** A moment expressed in Amsterdam local time on 1 January 2026 (winter, UTC+1). */
const at = (time: string): Date => new Date(`2026-01-01T${time}:00+01:00`)

const formatTimeUnchecked = formatTime as unknown as (date?: unknown) => string
const formatTimeRangeUnchecked = formatTimeRange as unknown as (start?: unknown, end?: unknown) => string

describe('formatTime', () => {
  it('formats a time with a colon', () => {
    expect(formatTime(at('14:30'))).toBe('14:30')
  })

  it('formats a morning time without a leading zero', () => {
    expect(formatTime(at('09:05'))).toBe('9:05')
  })

  it('formats a numeric timestamp', () => {
    expect(formatTime(at('00:00').getTime())).toBe('0:00')
  })

  it('renders the same Amsterdam time independent of the runtime zone', () => {
    // 12:30 UTC is 13:30 in Amsterdam.
    expect(formatTime(new Date('2026-01-01T12:30:00Z'))).toBe('13:30')
  })

  describe('text style', () => {
    it('uses a period and the word uur', () => {
      expect(formatTime(at('14:30'), { style: 'text' })).toBe('14.30 uur')
    })

    it('has no leading zero', () => {
      expect(formatTime(at('09:05'), { style: 'text' })).toBe('9.05 uur')
    })
  })

  describe('returns an empty string for invalid input', () => {
    it('for undefined', () => {
      expect(formatTimeUnchecked(undefined)).toBe('')
    })

    it('for an invalid Date', () => {
      expect(formatTime(new Date(NaN))).toBe('')
    })
  })
})

describe('formatTimeRange', () => {
  it('joins two times with an en dash and no spaces', () => {
    expect(formatTimeRange(at('09:00'), at('17:00'))).toBe('9:00–17:00')
  })

  it('accepts numeric timestamps', () => {
    expect(formatTimeRange(at('09:00').getTime(), at('17:00').getTime())).toBe('9:00–17:00')
  })

  it('formats a range across midnight without naming a date', () => {
    expect(formatTimeRange(at('23:00'), new Date('2026-01-02T01:00:00+01:00'))).toBe('23:00–1:00')
  })

  it('repeats the time when both ends are equal', () => {
    expect(formatTimeRange(at('09:00'), at('09:00'))).toBe('9:00–9:00')
  })

  describe('text style', () => {
    it('writes van … tot … uur', () => {
      expect(formatTimeRange(at('09:00'), at('17:00'), { style: 'text' })).toBe('van 9.00 tot 17.00 uur')
    })
  })

  describe('returns an empty string when a time is invalid or missing', () => {
    it('when the start is invalid', () => {
      expect(formatTimeRange(new Date(NaN), at('17:00'))).toBe('')
    })

    it('when the end is missing', () => {
      expect(formatTimeRangeUnchecked(at('09:00'), undefined)).toBe('')
    })
  })
})
