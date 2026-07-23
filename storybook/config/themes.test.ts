/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { matchTheme } from './themes'

describe('matchTheme', () => {
  it('returns the selected theme when the story supports it', () => {
    expect(matchTheme(['Spacious', 'Spacious sketch'], 'Spacious sketch')).toBe('Spacious sketch')
  })

  it('falls back to the supported theme with the same fidelity as the selection', () => {
    expect(matchTheme(['Compact', 'Compact sketch'], 'Spacious sketch')).toBe('Compact sketch')
    expect(matchTheme(['Compact', 'Compact sketch'], 'Spacious')).toBe('Compact')
  })

  it('falls back to the first option when no supported theme shares the fidelity', () => {
    expect(matchTheme(['Compact'], 'Spacious sketch')).toBe('Compact')
  })

  it('returns the selection when there are no options', () => {
    expect(matchTheme([], 'Spacious')).toBe('Spacious')
  })
})
