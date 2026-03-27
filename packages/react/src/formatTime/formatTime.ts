/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const locale = 'nl'

type DateInput = Date | number

const formatter = new Intl.DateTimeFormat(locale, {
  hour: 'numeric',
  minute: '2-digit',
})

// formatRange is supported in all target browsers but missing from the ES2020 type definitions.
const formatRange = (start: DateInput, end: DateInput): string =>
  (formatter as unknown as { formatRange: (s: DateInput, e: DateInput) => string }).formatRange(start, end)

/**
 * Formats a time or time range in Dutch notation, according to the City's writing guidelines.
 *
 * A single time: `formatTime(date)` → `'14:30'`.
 * A time range: `formatTime(start, until)` → `'14:30–15:00'`.
 *
 * @param date - A `Date` object or a numeric timestamp.
 * @param until - An optional end `Date` or timestamp to format a range.
 * @returns A locale-formatted time string using the `nl` locale.
 * @example formatTime(new Date(2026, 0, 1, 14, 30)) // '14:30'
 * @example formatTime(new Date(2026, 0, 1, 14, 30), new Date(2026, 0, 1, 15, 0)) // '14:30–15:00'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/tijdnotatie/ Amsterdam Writing Guide – Tijdnotatie}
 */
export const formatTime = (date: DateInput, until?: DateInput): string =>
  until !== undefined ? formatRange(date, until) : formatter.format(date)
