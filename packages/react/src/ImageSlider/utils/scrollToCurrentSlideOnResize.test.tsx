import type { RefObject } from 'react'

import { beforeEach, describe, expect, it, vi } from 'vitest'

import { scrollToCurrentSlideOnResize } from './scrollToCurrentSlideOnResize'
import * as scrollUtils from './scrollToSlide'

vi.mock('./scrollToSlide')

describe('scrollToCurrentSlideOnResize', () => {
  const createRef = (options: { withElement?: boolean }) => {
    const { withElement = true } = options
    const currentSlideElement = withElement ? ({} as HTMLElement) : null
    const scrollerElement = withElement ? { children: [currentSlideElement] } : null

    return {
      currentSlideElement,
      ref: { current: scrollerElement } as unknown as RefObject<HTMLDivElement>,
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls scrollToSlide when the current slide exists', () => {
    const scrollToSlide = vi.fn()

    vi.mocked(scrollUtils.scrollToSlide).mockImplementation(scrollToSlide)

    const { ref } = createRef({ withElement: true })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlide).toHaveBeenCalledWith(0, ref)
  })

  it('does not call scrollToSlide if scrollerRef.current is null', () => {
    const scrollToSlide = vi.fn()

    vi.mocked(scrollUtils.scrollToSlide).mockImplementation(scrollToSlide)

    const { ref } = createRef({ withElement: false })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlide if currentSlideElement is null', () => {
    const scrollToSlide = vi.fn()

    vi.mocked(scrollUtils.scrollToSlide).mockImplementation(scrollToSlide)

    const scrollerElement = { children: [null] }
    const ref = { current: scrollerElement } as unknown as RefObject<HTMLDivElement>

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlide).not.toHaveBeenCalled()
  })
})
