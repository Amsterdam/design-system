import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'
import { scrollToSlideById } from './scrollToSlideById'

jest.mock('./scrollToSlide', () => ({
  scrollToSlide: jest.fn(),
}))

describe('scrollToSlideById', () => {
  beforeEach(() => {
    ;(scrollToSlide as jest.Mock).mockClear()
  })

  it('calls scrollToSlide with the correct element when the element exists', () => {
    const element = {} as HTMLElement
    const ref = { current: { children: [element] } } as unknown as RefObject<HTMLDivElement>

    scrollToSlideById(0, ref)

    expect(scrollToSlide).toHaveBeenCalledWith(element, ref)
  })

  it('does not call scrollToSlide if the element does not exist', () => {
    const ref = { current: { children: [] } } as unknown as RefObject<HTMLDivElement>

    scrollToSlideById(0, ref)

    expect(scrollToSlide).not.toHaveBeenCalled()
  })
})
