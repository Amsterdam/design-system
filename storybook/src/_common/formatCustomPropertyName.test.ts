/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatCustomPropertyName } from './formatCustomPropertyName'

describe('formatCustomPropertyName', () => {
  it('joins the path segments with hyphens', () => {
    expect(formatCustomPropertyName(['ams', 'color', 'highlight', 'orange'])).toBe('--ams-color-highlight-orange')
  })

  it('drops a trailing "default" segment', () => {
    expect(formatCustomPropertyName(['ams', 'color', 'interactive', 'default'])).toBe('--ams-color-interactive')
  })

  it('keeps a "default" segment that is not the last one', () => {
    expect(formatCustomPropertyName(['ams', 'default', 'color'])).toBe('--ams-default-color')
  })

  it('drops only the last of two consecutive "default" segments', () => {
    expect(formatCustomPropertyName(['ams', 'default', 'default'])).toBe('--ams-default')
  })
})
