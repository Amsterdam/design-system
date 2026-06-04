/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DateRange } from './DatePicker'

import { getDaysInMonth, startOfDay } from '../common/dates'

/** Whether the date is before `minDate` or after `maxDate` (comparing by day). */
export const isOutOfBounds = (date: Date, minDate?: Date, maxDate?: Date) =>
  (minDate !== undefined && startOfDay(date) < startOfDay(minDate)) ||
  (maxDate !== undefined && startOfDay(date) > startOfDay(maxDate))

/** Whether the date falls strictly between the range’s start and end. */
export const isWithinRange = (date: Date, { start, end }: DateRange) =>
  start !== null && end !== null && startOfDay(date) > startOfDay(start) && startOfDay(date) < startOfDay(end)

/**
 * Computes the next range when a date is picked.
 * Starts a fresh range when there is no start yet, when the range is already complete,
 * or when the picked date precedes the current start; otherwise it completes the range.
 */
export const nextRange = ({ start, end }: DateRange, date: Date): DateRange => {
  if (start === null || end !== null) {
    return { start: date, end: null }
  }

  if (startOfDay(date) < startOfDay(start)) {
    return { start: date, end: null }
  }

  return { start, end: date }
}

/** Returns a new date `amount` days from the given date. */
export const addDays = (date: Date, amount: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)

/** Returns the same day `amount` months away, clamped to the target month’s last day. */
export const addMonths = (date: Date, amount: number) => {
  const month = date.getMonth() + amount
  const day = Math.min(date.getDate(), getDaysInMonth(date.getFullYear(), month))

  return new Date(date.getFullYear(), month, day)
}

/** Returns the same day `amount` years away, clamped to the target month’s last day. */
export const addYears = (date: Date, amount: number) => {
  const year = date.getFullYear() + amount
  const day = Math.min(date.getDate(), getDaysInMonth(year, date.getMonth()))

  return new Date(year, date.getMonth(), day)
}

/** Returns the Monday of the week containing the given date. */
export const startOfWeek = (date: Date) => addDays(date, -((date.getDay() + 6) % 7))

/** Returns the Sunday of the week containing the given date. */
export const endOfWeek = (date: Date) => addDays(startOfWeek(date), 6)

/**
 * Returns the date that keyboard focus should move to for a navigation key,
 * or `undefined` when the key does not move focus.
 */
export const getNextFocusDate = (key: string, shiftKey: boolean, date: Date): Date | undefined => {
  switch (key) {
    case 'ArrowDown':
      return addDays(date, 7)
    case 'ArrowLeft':
      return addDays(date, -1)
    case 'ArrowRight':
      return addDays(date, 1)
    case 'ArrowUp':
      return addDays(date, -7)
    case 'End':
      return endOfWeek(date)
    case 'Home':
      return startOfWeek(date)
    case 'PageDown':
      return shiftKey ? addYears(date, 1) : addMonths(date, 1)
    case 'PageUp':
      return shiftKey ? addYears(date, -1) : addMonths(date, -1)
    default:
      return undefined
  }
}
