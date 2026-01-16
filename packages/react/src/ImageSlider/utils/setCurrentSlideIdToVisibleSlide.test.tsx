import type { RefObject } from 'react'

import { setCurrentSlideIdToVisibleSlide } from './setCurrentSlideIdToVisibleSlide'

describe('setCurrentSlideIdToVisibleSlide', () => {
  it('calls setCurrentSlideId with the index of the intersecting element', () => {
    const setCurrentSlideId = jest.fn()
    const element1 = {} as HTMLElement
    const element2 = {} as HTMLElement
    const ref = { current: { children: [element1, element2] } } as unknown as RefObject<HTMLDivElement>
    const observations = [
      { isIntersecting: false, target: element1 } as unknown as IntersectionObserverEntry,
      { isIntersecting: true, target: element2 } as unknown as IntersectionObserverEntry,
    ]

    setCurrentSlideIdToVisibleSlide({ observations, ref, setCurrentSlideId })

    expect(setCurrentSlideId).toHaveBeenCalledWith(1)
  })

  it('does not call setCurrentSlideId if no element is intersecting', () => {
    const setCurrentSlideId = jest.fn()
    const element1 = {} as HTMLElement
    const element2 = {} as HTMLElement
    const ref = { current: { children: [element1, element2] } } as unknown as RefObject<HTMLDivElement>
    const observations = [
      { isIntersecting: false, target: element1 } as unknown as IntersectionObserverEntry,
      { isIntersecting: false, target: element2 } as unknown as IntersectionObserverEntry,
    ]

    setCurrentSlideIdToVisibleSlide({ observations, ref, setCurrentSlideId })

    expect(setCurrentSlideId).not.toHaveBeenCalled()
  })

  it('returns undefined for empty children array', () => {
    const setCurrentSlideId = jest.fn()
    const ref = { current: { children: [] } } as unknown as RefObject<HTMLDivElement>
    const observations = [{ isIntersecting: true, target: {} } as IntersectionObserverEntry]

    const result = setCurrentSlideIdToVisibleSlide({ observations, ref, setCurrentSlideId })

    expect(result).toBeUndefined()
  })
})
