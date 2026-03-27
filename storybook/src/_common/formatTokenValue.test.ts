/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatTokenValue } from './formatTokenValue'

describe('formatTokenValue', () => {
  it('returns a literal value unchanged', () => {
    expect(formatTokenValue('2px')).toBe('2px')
  })

  it('returns an empty string unchanged', () => {
    expect(formatTokenValue('')).toBe('')
  })

  it('converts a single token reference to a CSS custom property', () => {
    expect(formatTokenValue('{ams.border.width.s}')).toBe('var(--ams-border-width-s)')
  })

  it('converts dots in the reference to hyphens', () => {
    expect(formatTokenValue('{ams.color.highlight.orange}')).toBe('var(--ams-color-highlight-orange)')
  })

  it('converts multiple token references in a single string', () => {
    expect(formatTokenValue('inset 0rem {ams.border.width.m} 0rem 0rem {ams.color.separator}')).toBe(
      'inset 0rem var(--ams-border-width-m) 0rem 0rem var(--ams-color-separator)',
    )
  })

  it('leaves literal parts untouched when mixed with references', () => {
    expect(formatTokenValue('0 0 0 {ams.border.width.negative.m} hotpink')).toBe(
      '0 0 0 var(--ams-border-width-negative-m) hotpink',
    )
  })
})
