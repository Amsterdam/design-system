import type { RefObject } from 'react'

import { scrollToSlide } from './scrollToSlide'

type Args = {
  currentSlideId: number
  ref: RefObject<HTMLDivElement>
}

// Re-center the current slide after a resize. `scrollToSlide` resolves the inline axis from the
// writing direction and is a no-op when the slide is already centered, so no physical scroll-offset
// comparison is needed (that comparison was wrong in right-to-left contexts anyway).
export const scrollToCurrentSlideOnResize = ({ currentSlideId, ref }: Args) => {
  if (!ref.current?.children[currentSlideId]) return

  scrollToSlide(currentSlideId, ref)
}
