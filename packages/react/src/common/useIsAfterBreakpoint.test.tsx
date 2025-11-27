import { act, renderHook } from '@testing-library/react'

import useIsAfterBreakpoint, { BREAKPOINTS } from './useIsAfterBreakpoint'

describe('useIsAfterBreakpoint', () => {
  let resizeListeners: Array<() => void> = []
  let currentMatches: string[] = []

  let originalAddEventListener: typeof window.addEventListener
  let originalRemoveEventListener: typeof window.removeEventListener

  beforeEach(() => {
    resizeListeners = []
    currentMatches = []

    originalAddEventListener = window.addEventListener
    originalRemoveEventListener = window.removeEventListener

    // Capture resize listeners on window
    jest.spyOn(window, 'addEventListener').mockImplementation((type, listener) => {
      if (type === 'resize') {
        if (typeof listener === 'function') {
          resizeListeners.push(listener as () => void)
        } else {
          resizeListeners.push(() => listener.handleEvent(new Event('resize')))
        }
      } else {
        originalAddEventListener(type, listener)
      }
    })

    jest.spyOn(window, 'removeEventListener').mockImplementation((type, listener) => {
      if (type === 'resize') {
        resizeListeners = resizeListeners.filter((l) => l !== listener)
      } else {
        originalRemoveEventListener(type, listener)
      }
    })

    // Mock matchMedia with a dynamic `matches` getter
    window.matchMedia = jest.fn().mockImplementation((query: string): MediaQueryList => {
      return {
        addEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        get matches() {
          return currentMatches.includes(query)
        },
        media: query,
        onchange: null,
        removeEventListener: jest.fn(),
      } as unknown as MediaQueryList
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  const triggerResize = (): void => {
    resizeListeners.forEach((listener) => listener())
  }

  test('returns false when matchMedia does not match initially', () => {
    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(false)
  })

  test('returns true when matchMedia matches initially', () => {
    currentMatches = [`(min-width: ${BREAKPOINTS.medium})`]

    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(true)
  })

  test('updates from false to true when resizing into the breakpoint', () => {
    currentMatches = [] // below wide

    const { result } = renderHook(() => useIsAfterBreakpoint('wide'))
    expect(result.current).toBe(false)

    act(() => {
      currentMatches = [`(min-width: ${BREAKPOINTS.wide})`] // now matches
      triggerResize()
    })

    expect(result.current).toBe(true)
  })

  test('updates from true to false when resizing below the breakpoint', () => {
    currentMatches = [`(min-width: ${BREAKPOINTS.medium})`] // initially matches

    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(true)

    act(() => {
      currentMatches = [] // now below
      triggerResize()
    })

    expect(result.current).toBe(false)
  })

  test('removes resize listener on unmount', () => {
    const { unmount } = renderHook(() => useIsAfterBreakpoint('medium'))

    expect(resizeListeners.length).toBe(1)

    unmount()

    expect(resizeListeners.length).toBe(0)
  })

  test('is safe during SSR (no window)', () => {
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
