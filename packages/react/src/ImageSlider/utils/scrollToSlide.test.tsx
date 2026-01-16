import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

describe('scrollToSlide', () => {
  it('scrolls the scroller to the element offsetLeft', () => {
    const scrollToMock = jest.fn()

    const element = { offsetLeft: 42 } as HTMLElement
    const ref = { current: { scrollTo: scrollToMock as unknown } } as RefObject<HTMLDivElement>

    scrollToSlide(element, ref)

    expect(scrollToMock).toHaveBeenCalledWith({ left: 42 })
  })

  it('returns undefined if scrollerRef.current is null', () => {
    const element = {} as HTMLElement
    const ref = { current: null } as RefObject<HTMLDivElement>

    const result = scrollToSlide(element, ref)

    expect(result).toBeUndefined()
  })
})
