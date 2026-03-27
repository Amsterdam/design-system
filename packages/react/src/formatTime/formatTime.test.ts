/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatTime } from './formatTime'

describe('formatTime', () => {
  it('formats a time', () => {
    expect(formatTime(new Date(2026, 0, 1, 14, 30))).toBe('14:30')
  })

  it('formats a morning time without a leading zero', () => {
    expect(formatTime(new Date(2026, 0, 1, 9, 5))).toBe('9:05')
  })

  it('formats a time range', () => {
    const start = new Date(2026, 0, 1, 14, 30)
    const end = new Date(2026, 0, 1, 15, 0)

    expect(formatTime(start, end)).toBe('14:30–15:00')
  })

  it('formats a numeric timestamp', () => {
    expect(formatTime(new Date(2026, 0, 1, 0, 0).getTime())).toBe('0:00')
  })
})
