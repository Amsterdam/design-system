import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

export const scrollToSlideById = (id: number, ref: RefObject<HTMLDivElement>) => {
  const element = ref.current?.children[id] as HTMLElement | null

  if (element) scrollToSlide(element, ref)
}
