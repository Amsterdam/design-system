/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const locale = 'nl-NL'

type DateInput = Date | number

type FormatTimeOptions = {
  /**
   * The notation to use.
   * `'digital'` (the default) writes a colon, for schedules and interfaces: `14:30`.
   * `'text'` writes a period and the word `uur`, for running text: `14.30 uur`.
   */
  style?: 'digital' | 'text'
}

const formatter = new Intl.DateTimeFormat(locale, {
  hour: 'numeric',
  minute: '2-digit',
  // Pinned so a time reads as the same Amsterdam-local moment everywhere, including on a server render.
  timeZone: 'Europe/Amsterdam',
})

const toTimestamp = (date: DateInput): number => (date instanceof Date ? date.getTime() : date)

/** The digital notation, e.g. `14:30`. */
const digital = (timestamp: number): string => formatter.format(timestamp)

/** The text notation without the trailing `uur`, e.g. `14.30`. */
const period = (timestamp: number): string => digital(timestamp).replace(':', '.')

/**
 * Formats a time in Dutch notation, according to the City of Amsterdam writing guidelines.
 *
 * The default `'digital'` style writes a colon, for schedules and interfaces: `14:30`, `9:05`.
 * The `'text'` style writes a period and the word `uur`, for running text: `14.30 uur`.
 *
 * Returns an empty string for an invalid or missing time.
 *
 * @param date - A `Date` object or a numeric timestamp.
 * @param options - Optional settings.
 * @param options.style - The notation to use: `'digital'` (default) or `'text'`.
 * @returns A locale-formatted time string using the `nl-NL` locale, or an empty string for invalid input.
 * @example formatTime(new Date(2026, 0, 1, 14, 30)) // '14:30'
 * @example formatTime(new Date(2026, 0, 1, 14, 30), { style: 'text' }) // '14.30 uur'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/tijdnotatie/ Amsterdam Writing Guide – Tijdnotatie}
 */
export const formatTime = (date: DateInput, options?: FormatTimeOptions): string => {
  const timestamp = toTimestamp(date)

  if (!Number.isFinite(timestamp)) {
    return ''
  }

  return options?.style === 'text' ? `${period(timestamp)} uur` : digital(timestamp)
}

/**
 * Formats a time range in Dutch notation, according to the City of Amsterdam writing guidelines.
 *
 * The default `'digital'` style joins the times with an en dash: `9:00–17:00`.
 * The `'text'` style writes it out: `van 9.00 tot 17.00 uur`.
 *
 * The range is composed from its two times, so it never names a date: a range across midnight
 * reads `9:00–1:00`. Returns an empty string if either time is invalid or missing.
 *
 * @param start - The start of the range, as a `Date` object or a numeric timestamp.
 * @param end - The end of the range, as a `Date` object or a numeric timestamp.
 * @param options - Optional settings.
 * @param options.style - The notation to use: `'digital'` (default) or `'text'`.
 * @returns A locale-formatted time range using the `nl-NL` locale, or an empty string for invalid input.
 * @example formatTimeRange(new Date(2026, 0, 1, 9), new Date(2026, 0, 1, 17)) // '9:00–17:00'
 * @example formatTimeRange(new Date(2026, 0, 1, 9), new Date(2026, 0, 1, 17), { style: 'text' }) // 'van 9.00 tot 17.00 uur'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/tijdnotatie/ Amsterdam Writing Guide – Tijdnotatie}
 */
export const formatTimeRange = (start: DateInput, end: DateInput, options?: FormatTimeOptions): string => {
  const startTimestamp = toTimestamp(start)
  const endTimestamp = toTimestamp(end)

  if (!Number.isFinite(startTimestamp) || !Number.isFinite(endTimestamp)) {
    return ''
  }

  return options?.style === 'text'
    ? `van ${period(startTimestamp)} tot ${period(endTimestamp)} uur`
    : `${digital(startTimestamp)}–${digital(endTimestamp)}`
}
