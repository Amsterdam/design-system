import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

export const scrollToNextSlide = (currentSlideId: number, ref: RefObject<HTMLDivElement>) => {
  const element = ref.current?.children[currentSlideId]
  const nextElement = element?.nextElementSibling as HTMLElement | null

  if (nextElement) scrollToSlide(nextElement, ref)
}
