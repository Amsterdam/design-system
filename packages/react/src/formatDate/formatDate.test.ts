/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats a Date object in Dutch long-form notation', () => {
    expect(formatDate(new Date(2026, 4, 1))).toBe('1 mei 2026')
  })

  it('formats a numeric timestamp', () => {
    expect(formatDate(new Date(2028, 0, 16).getTime())).toBe('16 januari 2028')
  })

  it('includes the weekday name', () => {
    expect(formatDate(new Date(2028, 0, 16), { weekday: true })).toBe('zondag 16 januari 2028')
  })
})
