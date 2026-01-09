/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'

import { Button } from '../Button'

export type ImageSliderControlsProps = {
  /** Function to go to the next slide */
  goToNextSlide: () => void
  /** Function to go to the previous slide */
  goToPreviousSlide: () => void
  /** Whether the slider is at the last image */
  isAtEnd: boolean
  /** Whether the slider is at the first image */
  isAtStart: boolean
  /** The label for the ‘next’ button */
  nextLabel: string
  /** The label for the ‘previous’ button */
  previousLabel: string
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderControls = ({
  goToNextSlide,
  goToPreviousSlide,
  isAtEnd,
  isAtStart,
  nextLabel,
  previousLabel,
}: ImageSliderControlsProps) => {
  return (
    <div className="ams-image-slider__controls">
      <Button
        className="ams-image-slider__control"
        color="inverse"
        disabled={isAtStart}
        icon={ChevronBackwardIcon}
        iconOnly
        onClick={goToPreviousSlide}
      >
        {previousLabel}
      </Button>
      <Button
        className="ams-image-slider__control"
        color="inverse"
        disabled={isAtEnd}
        icon={ChevronForwardIcon}
        iconOnly
        onClick={goToNextSlide}
      >
        {nextLabel}
      </Button>
    </div>
  )
}
