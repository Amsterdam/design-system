import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('calls the function after the delay', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced('a', 'b')
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledWith('a', 'b')
  })

  it('calls the function only once if called multiple times rapidly', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced('first')
    debounced('second')
    debounced('third')

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('third')
  })

  it('preserves the `this` context', () => {
    const context = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fn(this: any) {
        return this.value
      },
      value: 42,
    }
    const spy = vi.spyOn(context, 'fn')
    const debounced = debounce(context.fn, 100)

    debounced.call(context)
    vi.advanceTimersByTime(100)
    expect(spy).toHaveReturnedWith(42)
  })

  afterAll(() => {
    vi.useRealTimers()
  })
})
