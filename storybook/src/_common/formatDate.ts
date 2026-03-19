/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const locale = 'nl'

const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const formatter = new Intl.DateTimeFormat(locale, options)

/**
 * Formats a date in Dutch long-form notation (e.g. ‘1 mei 2026’), according to the City’s writing guidelines.
 * @param date - A `Date` object or a numeric timestamp (milliseconds since epoch).
 * @returns A locale-formatted date string using the `nl` locale.
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/datumnotatie/ Date notation at Amsterdam Writing Guide (in Dutch)}
 */
export const formatDate = (date: Date | number): string => formatter.format(date)
