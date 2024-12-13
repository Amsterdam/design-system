/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * @param fileSize The size of the file in bytes.
 * @param precision The number of significant digits in the output.
 * @returns A human readable file size
 */
export const formatFileSize = (fileSize: number, precision = 3) => {
  const UNITS = ['bytes', 'kB', 'MB', 'GB']

  if (fileSize === 0) return '0 bytes'

  const exponent = Math.floor(Math.log10(fileSize) / 3)
  const size = (fileSize / Math.pow(1000, exponent)).toPrecision(precision)

  return `${size} ${UNITS[exponent]}`
}
