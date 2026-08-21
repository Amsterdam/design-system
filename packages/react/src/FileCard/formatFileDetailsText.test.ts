/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatFileDetailsTextEn, formatFileDetailsTextNl } from './formatFileDetailsText'

describe('formatFileDetailsText', () => {
  it('formats the type and size in Dutch', () => {
    expect(formatFileDetailsTextNl({ size: 1536000, type: 'application/pdf' })).toBe('(pdf, 1,5 MB)')
  })

  it('formats the type and size in English', () => {
    expect(formatFileDetailsTextEn({ size: 1536000, type: 'application/pdf' })).toBe('(pdf, 1.5 MB)')
  })

  it('omits the size when it is unknown', () => {
    expect(formatFileDetailsTextNl({ type: 'application/pdf' })).toBe('(pdf)')
  })

  it('omits the type when it is unknown', () => {
    expect(formatFileDetailsTextNl({ size: 1536000 })).toBe('(1,5 MB)')
  })

  it('returns an empty string when both are unknown', () => {
    expect(formatFileDetailsTextNl({})).toBe('')
  })

  it('names the application for the media types that people do not recognise by their subtype', () => {
    expect(formatFileDetailsTextNl({ type: 'application/msword' })).toBe('(Word)')
    expect(formatFileDetailsTextNl({ type: 'application/vnd.ms-excel' })).toBe('(Excel)')
    expect(formatFileDetailsTextNl({ type: 'application/vnd.ms-powerpoint' })).toBe('(PowerPoint)')
    expect(formatFileDetailsTextNl({ type: 'image/jpeg' })).toBe('(jpg)')
    expect(formatFileDetailsTextNl({ type: 'text/plain' })).toBe('(txt)')
  })

  it('falls back to the subtype rather than to a single word for every other media type', () => {
    expect(formatFileDetailsTextNl({ type: 'application/zip' })).toBe('(zip)')
    expect(formatFileDetailsTextNl({ type: 'image/png' })).toBe('(png)')
    expect(formatFileDetailsTextNl({ type: 'text/csv' })).toBe('(csv)')
    expect(formatFileDetailsTextNl({ type: 'application/vnd.oasis.opendocument.text' })).toBe('(text)')
  })

  it('uses the singular unit for a file of one byte', () => {
    expect(formatFileDetailsTextNl({ size: 0 })).toBe('(0 bytes)')
    expect(formatFileDetailsTextNl({ size: 1 })).toBe('(1 byte)')
    expect(formatFileDetailsTextNl({ size: 512 })).toBe('(512 bytes)')
  })

  it('scales the unit up to terabytes without ever running out', () => {
    expect(formatFileDetailsTextNl({ size: 1500 })).toBe('(1,5 kB)')
    expect(formatFileDetailsTextNl({ size: 1_500_000 })).toBe('(1,5 MB)')
    expect(formatFileDetailsTextNl({ size: 1_500_000_000 })).toBe('(1,5 GB)')
    expect(formatFileDetailsTextNl({ size: 1_500_000_000_000 })).toBe('(1,5 TB)')
    expect(formatFileDetailsTextNl({ size: 5_000_000_000_000_000 })).toBe('(5.000 TB)')
  })

  it('drops a trailing zero rather than padding to a fixed precision', () => {
    expect(formatFileDetailsTextNl({ size: 2_000_000 })).toBe('(2 MB)')
    expect(formatFileDetailsTextEn({ size: 2_000_000 })).toBe('(2 MB)')
  })
})
