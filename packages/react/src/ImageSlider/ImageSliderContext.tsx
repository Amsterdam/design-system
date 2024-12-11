/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  currentSlideId: number
  isAtStart: boolean
  isAtEnd: boolean
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  goToSlideId: (id: number) => void
}

const defaultValues: ImageSliderContextValue = {
  currentSlideId: 0,
  isAtStart: true,
  isAtEnd: false,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlideId: () => {},
}

export const ImageSliderContext = createContext(defaultValues)
