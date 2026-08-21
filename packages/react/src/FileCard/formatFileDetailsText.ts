/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type FileDetails = {
  /** The size of the file in bytes. */
  size?: number
  /** The media type of the file. */
  type?: string
}

export type FormatFileDetailsText = (details: FileDetails) => string

const fileSizeUnits = ['bytes', 'kB', 'MB', 'GB', 'TB']

const fileTypeLabels: Record<string, string> = {
  'application/msword': 'Word',
  'application/vnd.ms-excel': 'Excel',
  'application/vnd.ms-powerpoint': 'PowerPoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PowerPoint',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word',
  'image/jpeg': 'jpg',
  'image/svg+xml': 'svg',
  'text/plain': 'txt',
}

// An unmapped media type falls back to its subtype, reduced to the last dot-separated segment
// so that the long `application/vnd.…` names stay readable.
const formatFileType = (type: string) => fileTypeLabels[type] ?? type.split('/').pop()?.split('.').pop() ?? type

const formatFileSize = (size: number, locale: string) => {
  const exponent = size >= 1 ? Math.min(Math.floor(Math.log10(size) / 3), fileSizeUnits.length - 1) : 0
  const amount = size / 1000 ** exponent
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: exponent === 0 ? 0 : 1 }).format(amount)

  return `${number} ${exponent === 0 && amount === 1 ? 'byte' : fileSizeUnits[exponent]}`
}

const formatFileDetailsText =
  (locale: string): FormatFileDetailsText =>
  ({ size, type }) => {
    const details: string[] = []

    if (type) {
      details.push(formatFileType(type))
    }

    if (size !== undefined) {
      details.push(formatFileSize(size, locale))
    }

    return details.length > 0 ? `(${details.join(', ')})` : ''
  }

/** Formats the type and size of a file in English, e.g. ‘(pdf, 1.5 MB)’. */
export const formatFileDetailsTextEn: FormatFileDetailsText = formatFileDetailsText('en-GB')

/** Formats the type and size of a file in Dutch, e.g. ‘(pdf, 1,5 MB)’. */
export const formatFileDetailsTextNl: FormatFileDetailsText = formatFileDetailsText('nl-NL')
