/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useCallback, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { Button } from '../Button'

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
      <div {...restProps} className={clsx('ams-image-slider__controls', className)} ref={ref}>
        <Button
          className="ams-image-slider__control ams-image-slider__control--previous"
          color="inverse"
          disabled={isAtStart}
          icon={ChevronLeftIcon}
          iconOnly
          onClick={handleClickPrevious}
        >
          {previousLabel}
        </Button>
        <Button
          className="ams-image-slider__control ams-image-slider__control--next"
          color="inverse"
          disabled={isAtEnd}
          icon={ChevronRightIcon}
          iconOnly
          onClick={handleClickNext}
        >
          {nextLabel}
        </Button>
      </div>
    )
  },
)

ImageSliderControls.displayName = 'ImageSliderControls'
