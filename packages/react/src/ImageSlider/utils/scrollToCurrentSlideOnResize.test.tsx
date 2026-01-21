import type { RefObject } from 'react'

import { scrollToCurrentSlideOnResize } from './scrollToCurrentSlideOnResize'
import * as scrollUtils from './scrollToSlideById'

jest.mock('./scrollToSlideById')

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

  it('calls scrollToSlideById if the current slide is not in view', () => {
    const scrollToSlideById = jest.fn()

    ;(scrollUtils.scrollToSlideById as jest.Mock) = scrollToSlideById

    const { ref } = createRef({ offsetLeft: 100, scrollLeft: 0, withElement: true })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlideById).toHaveBeenCalledWith(0, ref)
  })

  it('does not call scrollToSlideById if scrollerRef.current is null', () => {
    const scrollToSlideById = jest.fn()

    ;(scrollUtils.scrollToSlideById as jest.Mock) = scrollToSlideById

    const { ref } = createRef({ withElement: false })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlideById).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlideById if currentSlideElement is null', () => {
    const scrollToSlideById = jest.fn()

    ;(scrollUtils.scrollToSlideById as jest.Mock) = scrollToSlideById

    const scrollerElement = { children: [null], scrollLeft: 0 }
    const ref = { current: scrollerElement } as unknown as RefObject<HTMLDivElement>

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlideById).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlideById if the slide is already in view', () => {
    const scrollToSlideById = jest.fn()

    ;(scrollUtils.scrollToSlideById as jest.Mock) = scrollToSlideById

    const { ref } = createRef({ offsetLeft: 100, scrollLeft: 100, withElement: true })

    scrollToCurrentSlideOnResize({ currentSlideId: 0, ref })

    expect(scrollToSlideById).not.toHaveBeenCalled()
  })
})
