/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  currentSlideId: number
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  goToSlideId: (id: number) => void
  isAtEnd: boolean
  isAtStart: boolean
}

const defaultValues: ImageSliderContextValue = {
  currentSlideId: 0,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlideId: () => {},
  isAtEnd: false,
  isAtStart: true,
}

export const ImageSliderContext = createContext(defaultValues)
