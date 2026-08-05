import type { RefObject } from 'react'

import { describe, expect, it, vi } from 'vitest'

import { scrollToSlide } from './scrollToSlide'

describe('scrollToSlide', () => {
  it('scrolls the slide into view, centered on the inline axis', () => {
    const scrollIntoViewMock = vi.fn()

    const element = { scrollIntoView: scrollIntoViewMock } as unknown as HTMLElement
    const ref = {
      current: { children: [element] },
    } as unknown as RefObject<HTMLDivElement>

    scrollToSlide(0, ref)

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ block: 'nearest', inline: 'center' })
  })

  it('returns undefined if there is no scroller', () => {
    const ref = { current: null } as RefObject<HTMLDivElement>

    const result = scrollToSlide(0, ref)

    expect(result).toBeUndefined()
  })

  it('returns undefined if there is no element', () => {
    const ref = {
      current: { children: [] },
    } as unknown as RefObject<HTMLDivElement>

    const result = scrollToSlide(0, ref)

    expect(result).toBeUndefined()
  })
})
