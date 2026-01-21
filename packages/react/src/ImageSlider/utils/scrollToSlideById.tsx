import type { RefObject } from 'react'

export const scrollToSlideById = (id: number, ref: RefObject<HTMLDivElement>) => {
  const element = ref.current?.children[id] as HTMLElement | null
  const scrollerElement = ref.current

  if (!element || !scrollerElement) return

  scrollerElement.scrollTo({
    left: element.offsetLeft,
  })
}
