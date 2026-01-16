import type { RefObject } from 'react'

import { scrollToCurrentSlideOnResize } from './scrollToCurrentSlideOnResize'

describe('scrollToCurrentSlideOnResize', () => {
  const createRef = (options: { offsetLeft?: number; scrollLeft?: number; withElement?: boolean }) => {
    const { offsetLeft = 0, scrollLeft = 0, withElement = true } = options
    const currentSlideElement = withElement ? ({ offsetLeft } as HTMLElement) : null
    const scrollerElement = withElement ? { children: [currentSlideElement], scrollLeft } : null

    return {
      currentSlideElement,
      ref: { current: scrollerElement } as unknown as RefObject<HTMLDivElement>,
    }
  }

  it('calls scrollToSlide if the current slide is not in view', () => {
    const scrollToSlide = jest.fn()
    const { currentSlideElement, ref } = createRef({ offsetLeft: 100, scrollLeft: 0, withElement: true })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref, scrollToSlide })

    expect(scrollToSlide).toHaveBeenCalledWith(currentSlideElement, ref)
  })

  it('does not call scrollToSlide if scrollerRef.current is null', () => {
    const scrollToSlide = jest.fn()
    const { ref } = createRef({ withElement: false })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref, scrollToSlide })

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlide if currentSlideElement is null', () => {
    const scrollToSlide = jest.fn()
    const scrollerElement = { children: [null], scrollLeft: 0 }
    const ref = { current: scrollerElement } as unknown as RefObject<HTMLDivElement>

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref, scrollToSlide })

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlide if the slide is already in view', () => {
    const scrollToSlide = jest.fn()
    const { ref } = createRef({ offsetLeft: 100, scrollLeft: 100, withElement: true })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref, scrollToSlide })

    expect(scrollToSlide).not.toHaveBeenCalled()
  })
})
