/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatFileMetadataTextEn, formatFileMetadataTextNl } from './formatFileMetadataText'

describe('formatFileMetadataText', () => {
  it('formats the type and size metadata in Dutch', () => {
    expect(formatFileMetadataTextNl({ size: 1536000, type: 'application/pdf' })).toBe('(pdf, 1,5 MB)')
  })

  it('formats the type and size metadata in English', () => {
    expect(formatFileMetadataTextEn({ size: 1536000, type: 'application/pdf' })).toBe('(pdf, 1.5 MB)')
  })

  it('omits the size when it is unknown', () => {
    expect(formatFileMetadataTextNl({ type: 'application/pdf' })).toBe('(pdf)')
  })

  it('omits the type when it is unknown', () => {
    expect(formatFileMetadataTextNl({ size: 1536000 })).toBe('(1,5 MB)')
  })

  it('returns an empty string when both are unknown', () => {
    expect(formatFileMetadataTextNl({})).toBe('')
  })

  it('names the application for the media types that people do not recognise by their subtype', () => {
    expect(formatFileMetadataTextNl({ type: 'application/msword' })).toBe('(Word)')
    expect(formatFileMetadataTextNl({ type: 'application/vnd.ms-excel' })).toBe('(Excel)')
    expect(formatFileMetadataTextNl({ type: 'application/vnd.ms-powerpoint' })).toBe('(PowerPoint)')
    expect(formatFileMetadataTextNl({ type: 'image/jpeg' })).toBe('(jpg)')
    expect(formatFileMetadataTextNl({ type: 'text/plain' })).toBe('(txt)')
  })

  it('falls back to the subtype rather than to a single word for every other media type', () => {
    expect(formatFileMetadataTextNl({ type: 'application/zip' })).toBe('(zip)')
    expect(formatFileMetadataTextNl({ type: 'image/png' })).toBe('(png)')
    expect(formatFileMetadataTextNl({ type: 'text/csv' })).toBe('(csv)')
    expect(formatFileMetadataTextNl({ type: 'application/vnd.oasis.opendocument.text' })).toBe('(text)')
  })

  it('uses the singular unit for a file of one byte', () => {
    expect(formatFileMetadataTextNl({ size: 0 })).toBe('(0 bytes)')
    expect(formatFileMetadataTextNl({ size: 1 })).toBe('(1 byte)')
    expect(formatFileMetadataTextNl({ size: 512 })).toBe('(512 bytes)')
  })

  it('scales the unit up to terabytes without ever running out', () => {
    expect(formatFileMetadataTextNl({ size: 1500 })).toBe('(1,5 kB)')
    expect(formatFileMetadataTextNl({ size: 1_500_000 })).toBe('(1,5 MB)')
    expect(formatFileMetadataTextNl({ size: 1_500_000_000 })).toBe('(1,5 GB)')
    expect(formatFileMetadataTextNl({ size: 1_500_000_000_000 })).toBe('(1,5 TB)')
    expect(formatFileMetadataTextNl({ size: 5_000_000_000_000_000 })).toBe('(5.000 TB)')
  })

  it('drops a trailing zero rather than padding to a fixed precision', () => {
    expect(formatFileMetadataTextNl({ size: 2_000_000 })).toBe('(2 MB)')
    expect(formatFileMetadataTextEn({ size: 2_000_000 })).toBe('(2 MB)')
  })
})
