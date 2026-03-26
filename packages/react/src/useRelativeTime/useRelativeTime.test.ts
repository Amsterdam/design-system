/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { renderHook } from '@testing-library/react'
import { act, createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useRelativeTime } from './useRelativeTime'

describe('useRelativeTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('times in the past', () => {
    it('returns "minder dan 1 minuut geleden" for a recent timestamp', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 10_000))

      expect(result.current).toBe('minder dan 1 minuut geleden')
    })

    it('returns "1 minuut geleden" after one minute', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 60_000))

      expect(result.current).toBe('1 minuut geleden')
    })

    it('returns "5 minuten geleden" after five minutes', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 300_000))

      expect(result.current).toBe('5 minuten geleden')
    })

    it('returns "1 uur geleden" after one hour', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 3_600_000))

      expect(result.current).toBe('1 uur geleden')
    })

    it('returns "1 dag geleden" after one day', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 86_400_000))

      expect(result.current).toBe('1 dag geleden')
    })

    it('rolls up into months for older timestamps', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() - 100 * 86_400_000))

      expect(result.current).toBe('3 maanden geleden')
    })
  })

  describe('times in the future', () => {
    it('returns "over minder dan 1 minuut" for a moment just ahead', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() + 10_000))

      expect(result.current).toBe('over minder dan 1 minuut')
    })

    it('returns "over 1 uur" for an hour ahead', () => {
      const { result } = renderHook(() => useRelativeTime(Date.now() + 3_600_000))

      expect(result.current).toBe('over 1 uur')
    })
  })

  it('updates after 30 seconds', () => {
    // Captured once, so it stays fixed while the clock advances.
    const fiftySecondsAgo = Date.now() - 50_000
    const { result } = renderHook(() => useRelativeTime(fiftySecondsAgo))

    expect(result.current).toBe('minder dan 1 minuut geleden')

    act(() => {
      vi.advanceTimersByTime(30_000)
    })

    expect(result.current).toBe('1 minuut geleden')
  })

  it('returns an empty string for an invalid Date', () => {
    const { result } = renderHook(() => useRelativeTime(new Date(NaN)))

    expect(result.current).toBe('')
  })

  it('renders an empty string on the server, so it cannot cause a hydration mismatch', () => {
    const Demo = () => createElement('span', null, useRelativeTime(Date.now() - 60_000))

    expect(renderToStaticMarkup(createElement(Demo))).toBe('<span></span>')
  })
})
