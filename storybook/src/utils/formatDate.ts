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

export const formatDate = (date: Date | number): string => formatter.format(date)
