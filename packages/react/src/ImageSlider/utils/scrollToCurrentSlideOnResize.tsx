import type { RefObject } from 'react'

type Args = {
  currentSlideId: number
  ref: RefObject<HTMLDivElement>
  scrollToSlide: (element: HTMLElement, ref: RefObject<HTMLDivElement>) => void
}

export const scrollToCurrentSlideOnResize = ({ currentSlideId, ref, scrollToSlide }: Args) => {
  const scrollerElement = ref.current
  const currentSlideElement = ref.current?.children[currentSlideId] as HTMLElement | null

  if (!scrollerElement || !currentSlideElement) return

  const expectedScrollLeft = currentSlideElement.offsetLeft

  if (Math.abs(scrollerElement.scrollLeft - expectedScrollLeft) < 1) return

  scrollToSlide(currentSlideElement, ref)
}
