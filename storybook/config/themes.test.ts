/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { matchTheme } from './themes'

describe('matchTheme', () => {
  it('returns the selected theme when the story supports it', () => {
    expect(matchTheme(['Spacious', 'Spacious wireframe'], 'Spacious wireframe')).toBe('Spacious wireframe')
  })

  it('falls back to the supported theme with the same fidelity as the selection', () => {
    expect(matchTheme(['Compact', 'Compact wireframe'], 'Spacious wireframe')).toBe('Compact wireframe')
    expect(matchTheme(['Compact', 'Compact wireframe'], 'Spacious')).toBe('Compact')
  })

  it('falls back to the first option when no supported theme shares the fidelity', () => {
    expect(matchTheme(['Compact'], 'Spacious wireframe')).toBe('Compact')
  })

  it('returns the selection when there are no options', () => {
    expect(matchTheme([], 'Spacious')).toBe('Spacious')
  })
})
