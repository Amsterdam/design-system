/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type ImageSliderContextValue = {
  currentSlide: number
}

const defaultValues: ImageSliderContextValue = {
  currentSlide: 0,
}

export const ImageSliderContext = createContext(defaultValues)
