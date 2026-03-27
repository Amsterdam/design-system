/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const locale = 'nl'

const baseOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const formatter = new Intl.DateTimeFormat(locale, baseOptions)
const weekdayFormatter = new Intl.DateTimeFormat(locale, { ...baseOptions, weekday: 'long' })

type FormatDateOptions = {
  /** Include the full weekday name, e.g. 'vrijdag 16 januari 2028'. */
  weekday?: boolean
}

/**
 * Formats a date in Dutch long-form notation (e.g. '1 mei 2026'), according to the City's writing guidelines.
 * @param date - A `Date` object or a numeric timestamp (milliseconds since epoch).
 * @param options - Optional settings.
 * @param options.weekday - Whether to include the full weekday name.
 * @returns A locale-formatted date string using the `nl` locale.
 * @example formatDate(new Date(2028, 0, 16)) // '16 januari 2028'
 * @example formatDate(new Date(2028, 0, 16), { weekday: true }) // 'zondag 16 januari 2028'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/datumnotatie/ Date notation at Amsterdam Writing Guide (in Dutch)}
 */
export const formatDate = (date: Date | number, options?: FormatDateOptions): string =>
  (options?.weekday ? weekdayFormatter : formatter).format(date)
