/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  atStart: boolean
  atEnd: boolean
  currentSlide: number
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  // eslint-disable-next-line no-unused-vars
  goToSlideId: (id: number) => void
}

const defaultValues: ImageSliderContextValue = {
  atStart: true,
  atEnd: false,
  currentSlide: 0,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlideId: () => {},
}

export const ImageSliderContext = createContext(defaultValues)
