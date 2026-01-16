import type { RefObject } from 'react'

import { scrollToPreviousSlide } from './scrollToPreviousSlide'
import { scrollToSlide } from './scrollToSlide'

jest.mock('./scrollToSlide', () => ({
  scrollToSlide: jest.fn(),
}))

describe('scrollToPreviousSlide', () => {
  beforeEach(() => {
    ;(scrollToSlide as jest.Mock).mockClear()
  })

  it('calls scrollToSlide with the previous element if it exists', () => {
    const previousElement = {} as HTMLElement
    const element = { previousElementSibling: previousElement } as unknown as HTMLElement
    const ref = { current: { children: [element] } } as unknown as RefObject<HTMLDivElement>

    scrollToPreviousSlide(0, ref)

    expect(scrollToSlide).toHaveBeenCalledWith(previousElement, ref)
  })

  it('does not call scrollToSlide if there is no previous element', () => {
    const element = { previousElementSibling: null } as unknown as HTMLElement
    const ref = { current: { children: [element] } } as unknown as RefObject<HTMLDivElement>

    scrollToPreviousSlide(0, ref)

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlide if the element does not exist', () => {
    const ref = { current: { children: [] } } as unknown as RefObject<HTMLDivElement>

    scrollToPreviousSlide(0, ref)

    expect(scrollToSlide).not.toHaveBeenCalled()
  })
})
