import { formatFileType } from './formatFileType'

describe('formatFileType', () => {
  it('formats image types correctly', () => {
    expect(formatFileType('image/gif')).toBe('gif')
    expect(formatFileType('image/jpeg')).toBe('jpg')
    expect(formatFileType('image/png')).toBe('png')
  })

  it('formats text types correctly', () => {
    expect(formatFileType('text/plain')).toBe('txt')
  })

  it('formats application types correctly', () => {
    expect(formatFileType('application/pdf')).toBe('pdf')
    expect(formatFileType('application/msword')).toBe('Word')
    expect(formatFileType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe('Word')
    expect(formatFileType('application/vnd.ms-excel')).toBe('Excel')
    expect(formatFileType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')).toBe('Excel')
    expect(formatFileType('application/vnd.ms-powerpoint')).toBe('PowerPoint')
    expect(formatFileType('application/vnd.openxmlformats-officedocument.presentationml.presentation')).toBe(
      'PowerPoint',
    )
  })

  it('returns the original file type for unknown types', () => {
    expect(formatFileType('unknown/type')).toBe('unknown/type')
  })
})
