/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useCollapsible } from './useCollapsible'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useCollapsible', () => {
  describe('uncontrolled', () => {
    it('defaults to false', () => {
      const { result } = renderHook(() => useCollapsible({}))

      expect(result.current[0]).toBe(false)
    })

    it('uses fallback when no value or defaultValue is provided', () => {
      const { result } = renderHook(() => useCollapsible({ fallback: true }))

      expect(result.current[0]).toBe(true)
    })

    it('seeds the initial value from defaultValue', () => {
      const { result } = renderHook(() => useCollapsible({ defaultValue: true }))

      expect(result.current[0]).toBe(true)
    })

    it('prefers defaultValue over fallback', () => {
      const { result } = renderHook(() => useCollapsible({ defaultValue: false, fallback: true }))

      expect(result.current[0]).toBe(false)
    })

    it('toggles the internal value', () => {
      const { result } = renderHook(() => useCollapsible({}))

      act(() => result.current[1]())

      expect(result.current[0]).toBe(true)

      act(() => result.current[1]())

      expect(result.current[0]).toBe(false)
    })

    it('fires onToggle with the next value', () => {
      const onToggle = vi.fn()
      const { result } = renderHook(() => useCollapsible({ onToggle }))

      act(() => result.current[1]())

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(true)

      act(() => result.current[1]())

      expect(onToggle).toHaveBeenLastCalledWith(false)
    })

    it('ignores a later defaultValue change', () => {
      const { rerender, result } = renderHook((props) => useCollapsible(props), {
        initialProps: { defaultValue: false },
      })

      rerender({ defaultValue: true })

      expect(result.current[0]).toBe(false)
    })

    it('reports that it is not controlled', () => {
      const { result } = renderHook(() => useCollapsible({}))

      expect(result.current[2]).toBe(false)
    })
  })

  describe('controlled', () => {
    it('reflects the controlled value and ignores defaultValue', () => {
      const { result } = renderHook(() => useCollapsible({ defaultValue: false, value: true }))

      expect(result.current[0]).toBe(true)
      expect(result.current[2]).toBe(true)
    })

    it('does not mutate the value when toggled', () => {
      const { result } = renderHook(() => useCollapsible({ value: true }))

      act(() => result.current[1]())

      expect(result.current[0]).toBe(true)
    })

    it('fires onToggle with the next value even though the value does not change', () => {
      const onToggle = vi.fn()
      const { result } = renderHook(() => useCollapsible({ onToggle, value: true }))

      act(() => result.current[1]())

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(false)
    })

    it('responds to controlled value changes', () => {
      const { rerender, result } = renderHook((props) => useCollapsible(props), {
        initialProps: { value: true },
      })

      expect(result.current[0]).toBe(true)

      rerender({ value: false })

      expect(result.current[0]).toBe(false)
    })
  })

  describe('gate', () => {
    it('falls back to the internal value and ignores the controlled value when gated off', () => {
      const { result } = renderHook(() => useCollapsible({ gate: false, value: true }))

      expect(result.current[0]).toBe(false)
      expect(result.current[2]).toBe(false)
    })

    it('does nothing and does not fire onToggle when gated off', () => {
      const onToggle = vi.fn()
      const { result } = renderHook(() => useCollapsible({ gate: false, onToggle }))

      act(() => result.current[1]())

      expect(result.current[0]).toBe(false)
      expect(onToggle).not.toHaveBeenCalled()
    })
  })

  describe('controlled/uncontrolled switch warning', () => {
    it('warns when switching from uncontrolled to controlled', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { rerender } = renderHook((props) => useCollapsible(props), {
        initialProps: { value: undefined as boolean | undefined },
      })

      rerender({ value: true })

      expect(warn).toHaveBeenCalledTimes(1)
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('uncontrolled to controlled'))
    })

    it('warns when switching from controlled to uncontrolled', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { rerender } = renderHook((props) => useCollapsible(props), {
        initialProps: { value: true as boolean | undefined },
      })

      rerender({ value: undefined })

      expect(warn).toHaveBeenCalledTimes(1)
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('controlled to uncontrolled'))
    })

    it('does not warn on stable rerenders', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { rerender } = renderHook((props) => useCollapsible(props), {
        initialProps: { value: true },
      })

      rerender({ value: false })
      rerender({ value: true })

      expect(warn).not.toHaveBeenCalled()
    })
  })
})
