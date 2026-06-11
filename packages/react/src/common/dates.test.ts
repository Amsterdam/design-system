/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { getDaysInMonth, getFirstWeekday, isSameDay, isSameMonth, startOfDay } from './dates'

describe('startOfDay', () => {
  it('strips the time from a date', () => {
    expect(startOfDay(new Date(2026, 2, 14, 13, 30, 45))).toEqual(new Date(2026, 2, 14))
  })
})

describe('isSameDay', () => {
  it('returns true for the same calendar day regardless of time', () => {
    expect(isSameDay(new Date(2026, 2, 14, 9), new Date(2026, 2, 14, 21))).toBe(true)
  })

  it('returns false for different days', () => {
    expect(isSameDay(new Date(2026, 2, 14), new Date(2026, 2, 15))).toBe(false)
  })
})

describe('isSameMonth', () => {
  it('returns true for dates in the same month and year', () => {
    expect(isSameMonth(new Date(2026, 2, 1), new Date(2026, 2, 31))).toBe(true)
  })

  it('returns false across month or year boundaries', () => {
    expect(isSameMonth(new Date(2026, 2, 31), new Date(2026, 3, 1))).toBe(false)
    expect(isSameMonth(new Date(2025, 2, 1), new Date(2026, 2, 1))).toBe(false)
  })
})

describe('getDaysInMonth', () => {
  it('returns the number of days in a month', () => {
    expect(getDaysInMonth(2026, 2)).toBe(31) // March
    expect(getDaysInMonth(2026, 3)).toBe(30) // April
  })

  it('accounts for leap years in February', () => {
    expect(getDaysInMonth(2024, 1)).toBe(29)
    expect(getDaysInMonth(2026, 1)).toBe(28)
  })
})

describe('getFirstWeekday', () => {
  it('returns 0 when the month starts on a Monday', () => {
    expect(getFirstWeekday(2026, 5)).toBe(0) // 1 June 2026 is a Monday
  })

  it('returns 6 when the month starts on a Sunday', () => {
    expect(getFirstWeekday(2026, 2)).toBe(6) // 1 March 2026 is a Sunday
  })
})
