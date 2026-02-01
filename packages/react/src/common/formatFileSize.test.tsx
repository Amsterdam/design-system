/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { formatFileSize } from './formatFileSize'

describe('formatFileSize', () => {
  it('formats bytes correctly', () => {
    expect(formatFileSize(500)).toBe('500 bytes')
  })

  it('formats kilobytes correctly', () => {
    expect(formatFileSize(1024, 1)).toBe('1 kB')
    expect(formatFileSize(2048, 1)).toBe('2 kB')
  })

  it('formats megabytes correctly', () => {
    expect(formatFileSize(1048576, 1)).toBe('1 MB')
    expect(formatFileSize(2097152, 1)).toBe('2 MB')
  })

  it('formats gigabytes correctly', () => {
    expect(formatFileSize(1073741824, 1)).toBe('1 GB')
    expect(formatFileSize(2147483648, 1)).toBe('2 GB')
  })
})
