import type { RefObject } from 'react'

export const scrollToSlide = (element: HTMLElement, ref: RefObject<HTMLDivElement>) => {
  const scrollerElement = ref.current

  if (!scrollerElement) return

  scrollerElement.scrollTo({
    left: element.offsetLeft,
  })
}
