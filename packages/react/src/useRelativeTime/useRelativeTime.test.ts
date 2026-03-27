/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useRelativeTime } from './useRelativeTime'

describe('useRelativeTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns "minder dan 1 minuut geleden" for a recent timestamp', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 10_000))

    expect(result.current).toBe('minder dan 1 minuut geleden')
  })

  it('returns "1 minuut geleden" after one minute', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 60_000))

    expect(result.current).toBe('1 minuut geleden')
  })

  it('returns "5 minuten geleden" after five minutes', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 300_000))

    expect(result.current).toBe('5 minuten geleden')
  })

  it('returns "1 uur geleden" after one hour', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 3_600_000))

    expect(result.current).toBe('1 uur geleden')
  })

  it('returns "1 dag geleden" after one day', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 86_400_000))

    expect(result.current).toBe('1 dag geleden')
  })

  it('updates after 30 seconds', () => {
    const now = Date.now()
    const { result } = renderHook(() => useRelativeTime(now - 50_000))

    expect(result.current).toBe('minder dan 1 minuut geleden')

    act(() => {
      vi.advanceTimersByTime(30_000)
    })

    expect(result.current).toBe('1 minuut geleden')
  })
})
