/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  currentSlide: number
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  // eslint-disable-next-line no-unused-vars
  goToSlideId: (id: number) => void
}

const defaultValues: ImageSliderContextValue = {
  currentSlide: 0,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlideId: () => {},
}

export const ImageSliderContext = createContext(defaultValues)
