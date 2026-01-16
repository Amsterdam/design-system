import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

export const scrollToPreviousSlide = (currentSlideId: number, ref: RefObject<HTMLDivElement>) => {
  const element = ref.current?.children[currentSlideId]
  const previousElement = element?.previousElementSibling as HTMLElement | null

  if (previousElement) scrollToSlide(previousElement, ref)
}
