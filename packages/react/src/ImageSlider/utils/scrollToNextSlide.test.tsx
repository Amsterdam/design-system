import type { RefObject } from 'react'

import { scrollToNextSlide } from './scrollToNextSlide'
import { scrollToSlide } from './scrollToSlide'

jest.mock('./scrollToSlide', () => ({
  scrollToSlide: jest.fn(),
}))

describe('scrollToNextSlide', () => {
  beforeEach(() => {
    ;(scrollToSlide as jest.Mock).mockClear()
  })

  it('calls scrollToSlide with the next element if it exists', () => {
    const nextElement = {} as HTMLElement
    const element = { nextElementSibling: nextElement } as unknown as HTMLElement
    const ref = { current: { children: [element] } } as unknown as RefObject<HTMLDivElement>

    scrollToNextSlide(0, ref)

    expect(scrollToSlide).toHaveBeenCalledWith(nextElement, ref)
  })

  it('does not call scrollToSlide if there is no next element', () => {
    const element = { nextElementSibling: null } as unknown as HTMLElement
    const ref = { current: { children: [element] } } as unknown as RefObject<HTMLDivElement>

    scrollToNextSlide(0, ref)

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('does not call scrollToSlide if the element does not exist', () => {
    const ref = { current: { children: [] } } as unknown as RefObject<HTMLDivElement>

    scrollToNextSlide(0, ref)

    expect(scrollToSlide).not.toHaveBeenCalled()
  })
})
