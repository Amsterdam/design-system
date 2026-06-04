/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/** Returns the start of the given day (midnight in local time). */
export const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

/** Whether two dates fall on the same calendar day. */
export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

/** Whether two dates fall in the same calendar month. */
export const isSameMonth = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()

/** The number of days in the given month. */
export const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()

/** The Monday-based weekday index (0 = Monday … 6 = Sunday) of the first day of the given month. */
export const getFirstWeekday = (year: number, month: number) => (new Date(year, month, 1).getDay() + 6) % 7
