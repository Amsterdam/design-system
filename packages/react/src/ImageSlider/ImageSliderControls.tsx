/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { IconButton } from '../IconButton'

type ImageSliderControlsProps = {
  previousLabel?: string
  nextLabel?: string
}

export const ImageSliderControls = forwardRef(
  (
    { previousLabel = 'Vorige', nextLabel = 'Volgende', ...restProps }: ImageSliderControlsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { atStart, atEnd, goToPreviousSlide, goToNextSlide } = useContext(ImageSliderContext)

    return (
      <div {...restProps} ref={ref} className="ams-image-slider__controls">
        <IconButton
          svg={ChevronLeftIcon}
          label={previousLabel}
          inverseColor={true}
          className="ams-image-slider__control ams-image-slider__control--previous"
          onClick={() => goToPreviousSlide()}
          disabled={atStart}
        />
        <IconButton
          svg={ChevronRightIcon}
          label={nextLabel}
          inverseColor={true}
          className="ams-image-slider__control ams-image-slider__control--next"
          onClick={() => goToNextSlide()}
          disabled={atEnd}
        />
      </div>
    )
  },
)

ImageSliderControls.displayName = 'ImageSlider.Item'
