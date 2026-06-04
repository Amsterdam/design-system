/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import {
  addDays,
  addMonths,
  addYears,
  endOfWeek,
  getNextFocusDate,
  isOutOfBounds,
  isWithinRange,
  nextRange,
  startOfWeek,
} from './utils'

describe('isOutOfBounds', () => {
  it('is true before the minimum date and after the maximum date', () => {
    expect(isOutOfBounds(new Date(2026, 2, 9), new Date(2026, 2, 10))).toBe(true)
    expect(isOutOfBounds(new Date(2026, 2, 21), undefined, new Date(2026, 2, 20))).toBe(true)
  })

  it('is false within the bounds and when no bounds are set', () => {
    expect(isOutOfBounds(new Date(2026, 2, 15), new Date(2026, 2, 10), new Date(2026, 2, 20))).toBe(false)
    expect(isOutOfBounds(new Date(2026, 2, 15))).toBe(false)
  })
})

describe('isWithinRange', () => {
  it('is true strictly between the start and end', () => {
    expect(isWithinRange(new Date(2026, 2, 15), { start: new Date(2026, 2, 10), end: new Date(2026, 2, 20) })).toBe(
      true,
    )
  })

  it('excludes the endpoints and incomplete ranges', () => {
    const range = { start: new Date(2026, 2, 10), end: new Date(2026, 2, 20) }
    expect(isWithinRange(new Date(2026, 2, 10), range)).toBe(false)
    expect(isWithinRange(new Date(2026, 2, 20), range)).toBe(false)
    expect(isWithinRange(new Date(2026, 2, 15), { start: new Date(2026, 2, 10), end: null })).toBe(false)
  })
})

describe('nextRange', () => {
  it('sets the start on the first pick', () => {
    expect(nextRange({ start: null, end: null }, new Date(2026, 2, 10))).toEqual({
      start: new Date(2026, 2, 10),
      end: null,
    })
  })

  it('completes the range on the second pick', () => {
    expect(nextRange({ start: new Date(2026, 2, 10), end: null }, new Date(2026, 2, 20))).toEqual({
      start: new Date(2026, 2, 10),
      end: new Date(2026, 2, 20),
    })
  })

  it('restarts when picking before the current start', () => {
    expect(nextRange({ start: new Date(2026, 2, 10), end: null }, new Date(2026, 2, 5))).toEqual({
      start: new Date(2026, 2, 5),
      end: null,
    })
  })

  it('restarts when the range is already complete', () => {
    expect(nextRange({ start: new Date(2026, 2, 10), end: new Date(2026, 2, 20) }, new Date(2026, 2, 25))).toEqual({
      start: new Date(2026, 2, 25),
      end: null,
    })
  })
})

describe('addDays', () => {
  it('moves forward and backward across month boundaries', () => {
    expect(addDays(new Date(2026, 2, 31), 1)).toEqual(new Date(2026, 3, 1))
    expect(addDays(new Date(2026, 2, 1), -1)).toEqual(new Date(2026, 1, 28))
  })
})

describe('addMonths', () => {
  it('keeps the day of the month when it exists', () => {
    expect(addMonths(new Date(2026, 2, 15), 1)).toEqual(new Date(2026, 3, 15))
  })

  it('clamps to the last day of the target month', () => {
    expect(addMonths(new Date(2026, 0, 31), 1)).toEqual(new Date(2026, 1, 28))
  })
})

describe('addYears', () => {
  it('clamps a leap day to the last day of February', () => {
    expect(addYears(new Date(2024, 1, 29), 1)).toEqual(new Date(2025, 1, 28))
  })
})

describe('startOfWeek and endOfWeek', () => {
  it('returns the Monday and Sunday of the week', () => {
    // 2026-03-18 is a Wednesday.
    expect(startOfWeek(new Date(2026, 2, 18))).toEqual(new Date(2026, 2, 16))
    expect(endOfWeek(new Date(2026, 2, 18))).toEqual(new Date(2026, 2, 22))
  })
})

describe('getNextFocusDate', () => {
  it('moves by day, week, month, and year', () => {
    const date = new Date(2026, 2, 15)

    expect(getNextFocusDate('ArrowLeft', false, date)).toEqual(new Date(2026, 2, 14))
    expect(getNextFocusDate('ArrowRight', false, date)).toEqual(new Date(2026, 2, 16))
    expect(getNextFocusDate('ArrowUp', false, date)).toEqual(new Date(2026, 2, 8))
    expect(getNextFocusDate('ArrowDown', false, date)).toEqual(new Date(2026, 2, 22))
    expect(getNextFocusDate('PageUp', false, date)).toEqual(new Date(2026, 1, 15))
    expect(getNextFocusDate('PageDown', false, date)).toEqual(new Date(2026, 3, 15))
    expect(getNextFocusDate('PageUp', true, date)).toEqual(new Date(2025, 2, 15))
    expect(getNextFocusDate('PageDown', true, date)).toEqual(new Date(2027, 2, 15))
  })

  it('returns undefined for keys that do not move focus', () => {
    expect(getNextFocusDate('Enter', false, new Date(2026, 2, 15))).toBeUndefined()
    expect(getNextFocusDate(' ', false, new Date(2026, 2, 15))).toBeUndefined()
  })
})
