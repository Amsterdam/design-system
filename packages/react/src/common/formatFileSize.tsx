/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 *
 * @param fileType
 * @returns Human readable file size
 */
export const formatFileSize = (fileSize: number, precision = 3) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (fileSize === 0) return '0 B'

  const exponent = Math.floor(Math.log10(fileSize) / 3)
  const size = (fileSize / Math.pow(1000, exponent)).toPrecision(precision)

  return `${size}${UNITS[exponent]}`
}
