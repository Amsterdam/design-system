/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { act, renderHook } from '@testing-library/react'

import useIsAfterBreakpoint, { BREAKPOINTS } from './useIsAfterBreakpoint'

describe('useIsAfterBreakpoint', () => {
  let currentMatches: string[] = []
  let changeListeners: Array<() => void> = []

  beforeEach(() => {
    currentMatches = []
    changeListeners = []

    // Mock matchMedia with a dynamic getter for `matches`
    window.matchMedia = jest.fn().mockImplementation((query: string): MediaQueryList => {
      return {
        addEventListener: (type: string, listener: () => void) => {
          if (type === 'change') changeListeners.push(listener)
        },
        dispatchEvent: jest.fn(),
        get matches() {
          return currentMatches.includes(query)
        },

        media: query,

        onchange: null,

        removeEventListener: (type: string, listener: () => void) => {
          if (type === 'change') {
            changeListeners = changeListeners.filter((l) => l !== listener)
          }
        },
      } as unknown as MediaQueryList
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  const triggerMediaChange = (): void => {
    changeListeners.forEach((listener) => listener())
  }

  test('returns false when the breakpoint does not match initially', () => {
    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(false)
  })

  test('returns true when the breakpoint matches initially', () => {
    currentMatches = [`(min-width: ${BREAKPOINTS.medium})`]

    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(true)
  })

  test('updates from false to true when the media query changes to match', () => {
    currentMatches = []

    const { result } = renderHook(() => useIsAfterBreakpoint('wide'))
    expect(result.current).toBe(false)

    act(() => {
      currentMatches = [`(min-width: ${BREAKPOINTS.wide})`]
      triggerMediaChange()
    })

    expect(result.current).toBe(true)
  })

  test('updates from true to false when the media query changes to not match', () => {
    currentMatches = [`(min-width: ${BREAKPOINTS.medium})`]

    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(true)

    act(() => {
      currentMatches = []
      triggerMediaChange()
    })

    expect(result.current).toBe(false)
  })

  test('removes the media query listener on unmount', () => {
    const { unmount } = renderHook(() => useIsAfterBreakpoint('medium'))

    expect(changeListeners.length).toBe(1)

    unmount()

    expect(changeListeners.length).toBe(0)
  })

  test('is safe during SSR when window is undefined', () => {
    // eslint-disable-next-line no-undef
    const originalWindow = global.window

    // @ts-expect-error simulate SSR
    // eslint-disable-next-line no-undef
    delete (global as typeof globalThis).window

    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))

    expect(result.current).toBe(false)

    // eslint-disable-next-line no-undef
    global.window = originalWindow
  })
})
