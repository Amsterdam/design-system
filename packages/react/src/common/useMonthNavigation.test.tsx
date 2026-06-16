/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useMonthNavigation } from './useMonthNavigation'

describe('useMonthNavigation', () => {
  it('starts at the given default month', () => {
    const { result } = renderHook(() => useMonthNavigation(new Date(2026, 2, 1)))

    expect(result.current.month).toEqual(new Date(2026, 2, 1))
  })

  it('steps to the previous and next month', () => {
    const { result } = renderHook(() => useMonthNavigation(new Date(2026, 2, 1)))

    act(() => result.current.goToNextMonth())
    expect(result.current.month).toEqual(new Date(2026, 3, 1))

    act(() => result.current.goToPreviousMonth())
    expect(result.current.month).toEqual(new Date(2026, 2, 1))
  })

  it('steps to the previous and next year', () => {
    const { result } = renderHook(() => useMonthNavigation(new Date(2026, 2, 1)))

    act(() => result.current.goToNextYear())
    expect(result.current.month).toEqual(new Date(2027, 2, 1))

    act(() => result.current.goToPreviousYear())
    expect(result.current.month).toEqual(new Date(2026, 2, 1))
  })

  it('normalises the month to the first of the month when stepping', () => {
    const { result } = renderHook(() => useMonthNavigation(new Date(2026, 0, 31)))

    act(() => result.current.goToNextMonth())
    expect(result.current.month).toEqual(new Date(2026, 1, 1))
  })

  it('lets the consumer set the month directly', () => {
    const { result } = renderHook(() => useMonthNavigation(new Date(2026, 2, 1)))

    act(() => result.current.setMonth(new Date(2026, 5, 1)))
    expect(result.current.month).toEqual(new Date(2026, 5, 1))
  })
})
