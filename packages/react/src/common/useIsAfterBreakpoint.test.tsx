/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { renderHook } from '@testing-library/react'

import useIsAfterBreakpoint, { BREAKPOINTS } from './useIsAfterBreakpoint'

const convertMediaQueryToPx = (query: string) => {
  const match = query.match(/[+-]?\d+(\.\d+)?/g)
  const widthInRem = match ? parseFloat(match[0]) : 0
  return widthInRem * 16 // Convert rem to px
}

const testMatchFunction = (query: string) => window.innerWidth >= convertMediaQueryToPx(query)

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    addEventListener: jest.fn(),
    matches: testMatchFunction(query),
    removeEventListener: jest.fn(),
  })),
  writable: true,
})

describe('useIsAfterBreakpoint', () => {
  it('returns false when the window width is less than the medium breakpoint', () => {
    window.innerWidth = convertMediaQueryToPx(BREAKPOINTS.medium) - 1
    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(false)
  })

  it('returns true when the window width is greater than the medium breakpoint', () => {
    window.innerWidth = convertMediaQueryToPx(BREAKPOINTS.medium) + 1
    const { result } = renderHook(() => useIsAfterBreakpoint('medium'))
    expect(result.current).toBe(true)
  })

  it('returns false when the window width is less than the wide breakpoint', () => {
    window.innerWidth = convertMediaQueryToPx(BREAKPOINTS.wide) - 1
    const { result } = renderHook(() => useIsAfterBreakpoint('wide'))
    expect(result.current).toBe(false)
  })

  it('returns true when the window width is greater than the wide breakpoint', () => {
    window.innerWidth = convertMediaQueryToPx(BREAKPOINTS.wide) + 1
    const { result } = renderHook(() => useIsAfterBreakpoint('wide'))
    expect(result.current).toBe(true)
  })
})
