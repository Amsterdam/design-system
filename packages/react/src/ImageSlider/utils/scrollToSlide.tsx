import type { RefObject } from 'react'

export const scrollToSlide = (id: number, ref: RefObject<HTMLDivElement>) => {
  const element = ref.current?.children[id] as HTMLElement | null

  if (!element) return

  // `scrollIntoView` resolves the inline axis from the writing direction, so it centers the slide
  // correctly in both left-to-right and right-to-left contexts. `block: 'nearest'` keeps it from
  // scrolling the page vertically.
  element.scrollIntoView({ block: 'nearest', inline: 'center' })
}
