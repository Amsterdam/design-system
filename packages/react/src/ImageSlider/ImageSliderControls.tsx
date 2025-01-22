/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useCallback, useContext } from 'react'
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
    const { goToNextSlide, goToPreviousSlide, isAtEnd, isAtStart } = useContext(ImageSliderContext)

    const handleClickPrevious = useCallback(() => goToPreviousSlide(), [goToPreviousSlide])
    const handleClickNext = useCallback(() => goToNextSlide(), [goToNextSlide])

    return (
      <div {...restProps} ref={ref} className={clsx('ams-image-slider__controls', className)}>
        <IconButton
          className="ams-image-slider__control ams-image-slider__control--previous"
          disabled={isAtStart}
          inverseColor={true}
          label={previousLabel}
          svg={ChevronLeftIcon}
          onClick={handleClickPrevious}
        />
        <IconButton
          className="ams-image-slider__control ams-image-slider__control--next"
          disabled={isAtEnd}
          inverseColor={true}
          label={nextLabel}
          svg={ChevronRightIcon}
          onClick={handleClickNext}
        />
      </div>
    )
  },
)

ImageSliderControls.displayName = 'ImageSliderControls'
