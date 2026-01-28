import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

describe('scrollToSlide', () => {
  it('scrolls the scroller to the element offsetLeft', () => {
    const scrollToMock = jest.fn()

    const element = { offsetLeft: 42 } as HTMLElement
    const ref = {
      current: { children: [element], scrollTo: scrollToMock as unknown },
    } as unknown as RefObject<HTMLDivElement>

    scrollToSlide(0, ref)

    expect(scrollToMock).toHaveBeenCalledWith({ left: 42 })
  })

  it('returns undefined if there is no scrollerElement', () => {
    const ref = { current: null } as RefObject<HTMLDivElement>

    const result = scrollToSlide(0, ref)

    expect(result).toBeUndefined()
  })

  it('returns undefined if there is no element', () => {
    const scrollToMock = jest.fn()

    const ref = {
      current: { children: [], scrollTo: scrollToMock as unknown },
    } as unknown as RefObject<HTMLDivElement>

    const result = scrollToSlide(0, ref)

    expect(result).toBeUndefined()
  })
})
