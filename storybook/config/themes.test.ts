/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { afterEach, describe, expect, it, vi } from 'vitest'

import { defaultTheme, matchTheme, readStoredTheme, storeTheme, THEME_KEY } from './themes'

describe('matchTheme', () => {
  it('returns the selected theme when the story supports it', () => {
    expect(matchTheme(['Spacious', 'Spacious Lo-fi'], 'Spacious Lo-fi')).toBe('Spacious Lo-fi')
  })

  it('falls back to the supported theme with the same fidelity as the selection', () => {
    expect(matchTheme(['Compact', 'Compact Lo-fi'], 'Spacious Lo-fi')).toBe('Compact Lo-fi')
    expect(matchTheme(['Compact', 'Compact Lo-fi'], 'Spacious')).toBe('Compact')
  })

  it('falls back to the first option when no supported theme shares the fidelity', () => {
    expect(matchTheme(['Compact'], 'Spacious Lo-fi')).toBe('Compact')
  })

  it('returns the selection when there are no options', () => {
    expect(matchTheme([], 'Spacious')).toBe('Spacious')
  })
})

describe('readStoredTheme', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns the stored theme when it is a known one', () => {
    vi.stubGlobal('localStorage', { getItem: () => 'Compact Lo-fi' })

    expect(readStoredTheme()).toBe('Compact Lo-fi')
  })

  it('falls back to the default theme when the stored value is no longer a known theme', () => {
    vi.stubGlobal('localStorage', { getItem: () => 'Spacious sketch' })

    expect(readStoredTheme()).toBe(defaultTheme)
  })

  it('falls back to the default theme when nothing is stored', () => {
    vi.stubGlobal('localStorage', { getItem: () => null })

    expect(readStoredTheme()).toBe(defaultTheme)
  })

  it('falls back to the default theme where localStorage is unavailable', () => {
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('localStorage is unavailable')
      },
    })

    expect(readStoredTheme()).toBe(defaultTheme)
  })
})

describe('storeTheme', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('persists the selection under the theme key', () => {
    const setItem = vi.fn()
    vi.stubGlobal('localStorage', { setItem })

    storeTheme('Compact Lo-fi')

    expect(setItem).toHaveBeenCalledWith(THEME_KEY, 'Compact Lo-fi')
  })

  it('keeps quiet where localStorage is unavailable', () => {
    vi.stubGlobal('localStorage', {
      setItem: () => {
        throw new Error('localStorage is unavailable')
      },
    })

    expect(() => storeTheme('Compact')).not.toThrow()
  })
})
