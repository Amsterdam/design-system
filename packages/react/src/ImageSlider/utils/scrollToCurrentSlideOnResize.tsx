import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

type Args = {
  currentSlideId: number
  ref: RefObject<HTMLDivElement>
}

export const scrollToCurrentSlideOnResize = ({ currentSlideId, ref }: Args) => {
  const scrollerElement = ref.current
  const currentSlideElement = ref.current?.children[currentSlideId] as HTMLElement | null

  if (!scrollerElement || !currentSlideElement) return

  const expectedScrollLeft = currentSlideElement.offsetLeft

  if (Math.abs(scrollerElement.scrollLeft - expectedScrollLeft) < 1) return

  scrollToSlide(currentSlideId, ref)
}
