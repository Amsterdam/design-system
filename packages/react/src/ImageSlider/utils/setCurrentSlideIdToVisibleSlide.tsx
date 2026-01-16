import type { RefObject } from 'react'

type Args = {
  observations: IntersectionObserverEntry[]
  ref: RefObject<HTMLDivElement>
  setCurrentSlideId: (id: number) => void
}

export const setCurrentSlideIdToVisibleSlide = ({ observations, ref, setCurrentSlideId }: Args) => {
  const images = Array.from(ref.current?.children || [])

  if (images.length === 0) return

  observations.forEach((observation) => {
    if (observation.isIntersecting) {
      setCurrentSlideId(images.indexOf(observation.target as HTMLElement))
    }
  })
}
