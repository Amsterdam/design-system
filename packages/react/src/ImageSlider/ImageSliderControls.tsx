/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import React, { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { IconButton } from '../IconButton'

export type ImageSliderControlsProps = {
  previousLabel: string
  nextLabel: string
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderControls = forwardRef(
  (
    { previousLabel, nextLabel, className, ...restProps }: ImageSliderControlsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { atStart, atEnd, goToPreviousSlide, goToNextSlide } = useContext(ImageSliderContext)
    return (
      <div {...restProps} ref={ref} className={clsx('ams-image-slider__controls', className)}>
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

ImageSliderControls.displayName = 'ImageSliderControls'
