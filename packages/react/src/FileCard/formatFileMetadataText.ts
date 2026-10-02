/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type FileMetadata = {
  /** The size of the file in bytes. */
  size?: number
  /** The media type of the file. */
  type?: string
}

export type FormatFileMetadataText = (metadata: FileMetadata) => string

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
const formatFileType = (type: string) => {
  const subtype = type.slice(type.lastIndexOf('/') + 1)

  return fileTypeLabels[type] ?? subtype.slice(subtype.lastIndexOf('.') + 1)
}

const formatFileSize = (size: number, locale: string) => {
  const exponent = size >= 1 ? Math.min(Math.floor(Math.log10(size) / 3), fileSizeUnits.length - 1) : 0
  const amount = size / 1000 ** exponent
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: exponent === 0 ? 0 : 1 }).format(amount)

  return `${number} ${exponent === 0 && amount === 1 ? 'byte' : fileSizeUnits[exponent]}`
}

const formatFileMetadataText =
  (locale: string): FormatFileMetadataText =>
  ({ size, type }) => {
    const metadataParts: string[] = []

    if (type) {
      metadataParts.push(formatFileType(type))
    }

    if (size !== undefined) {
      metadataParts.push(formatFileSize(size, locale))
    }

    return metadataParts.length > 0 ? `(${metadataParts.join(', ')})` : ''
  }

/** Formats the type and size metadata of a file in English, e.g. ‘(pdf, 1.5 MB)’. */
export const formatFileMetadataTextEn: FormatFileMetadataText = formatFileMetadataText('en-GB')

/** Formats the type and size metadata of a file in Dutch, e.g. ‘(pdf, 1,5 MB)’. */
export const formatFileMetadataTextNl: FormatFileMetadataText = formatFileMetadataText('nl-NL')
