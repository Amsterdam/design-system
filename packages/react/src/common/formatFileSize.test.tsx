import { formatFileSize } from './formatFileSize'

describe('formatFileSize', () => {
  it('formats bytes correctly', () => {
    expect(formatFileSize(500)).toBe('500B')
  })

  it('formats kilobytes correctly', () => {
    expect(formatFileSize(1024, 1)).toBe('1KB')
    expect(formatFileSize(2048, 1)).toBe('2KB')
  })

  it('formats megabytes correctly', () => {
    expect(formatFileSize(1048576, 1)).toBe('1MB')
    expect(formatFileSize(2097152, 1)).toBe('2MB')
  })

  it('formats gigabytes correctly', () => {
    expect(formatFileSize(1073741824, 1)).toBe('1GB')
    expect(formatFileSize(2147483648, 1)).toBe('2GB')
  })

  it('formats terabytes correctly', () => {
    expect(formatFileSize(1099511627776, 1)).toBe('1TB')
    expect(formatFileSize(2199023255552, 1)).toBe('2TB')
  })
})
