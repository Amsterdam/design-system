/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  atStart: boolean
  atEnd: boolean
  currentSlideId: number
  goToNextSlide: () => void
  goToPreviousSlide: () => void
  // eslint-disable-next-line no-unused-vars
  goToSlideId: (id: number) => void
}

const defaultValues: ImageSliderContextValue = {
  atStart: true,
  atEnd: false,
  currentSlideId: 0,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlideId: () => {},
}

export const ImageSliderContext = createContext(defaultValues)
