/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { IconButton } from '../IconButton'

export type ImageSliderControlsProps = {
  /** The label for the ‘next’ button */
  nextLabel: string
  /** The label for the ‘previous’ button */
  previousLabel: string
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderControls = forwardRef(
  (
    { className, nextLabel, previousLabel, ...restProps }: ImageSliderControlsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { atStart, atEnd, goToNextSlide, goToPreviousSlide } = useContext(ImageSliderContext)
    return (
      <div {...restProps} className={clsx('ams-image-slider__controls', className)} ref={ref}>
        <IconButton
          className="ams-image-slider__control ams-image-slider__control--previous"
          disabled={atStart}
          inverseColor={true}
          label={previousLabel}
          onClick={() => goToPreviousSlide()}
          svg={ChevronLeftIcon}
        />
        <IconButton
          className="ams-image-slider__control ams-image-slider__control--next"
          disabled={atEnd}
          inverseColor={true}
          label={nextLabel}
          onClick={() => goToNextSlide()}
          svg={ChevronRightIcon}
        />
      </div>
    )
  },
)

ImageSliderControls.displayName = 'ImageSliderControls'
