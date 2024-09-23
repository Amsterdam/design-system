/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { SlideProps } from './ImageSlider'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderThumbnailsProps = {
  thumbnails: SlideProps[]
  imageLabel?: string
  currentSlide?: number
} & HTMLAttributes<HTMLElement>

export const ImageSliderThumbnails = forwardRef(
  (
    { thumbnails, imageLabel, currentSlide, className, ...restProps }: ImageSliderThumbnailsProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const { goToSlideId } = useContext(ImageSliderContext)
    return (
      <nav {...restProps} ref={ref} className={clsx('ams-image-slider__thumbnails', className)} role="tablist">
        {thumbnails &&
          thumbnails.map((thumbnail, index) => (
            <button
              key={index}
              className={clsx(
                'ams-image-slider__thumbnail',
                thumbnail.ratio && `ams-aspect-ratio--${thumbnail.ratio}`,
                currentSlide === index && 'ams-image-slider__thumbnail--in-view',
              )}
              onClick={() => goToSlideId(index)}
              style={{ backgroundImage: `url(${thumbnail.src})` }}
              aria-label={`${imageLabel} ${index + 1}: ${thumbnail.alt}`}
              aria-selected={currentSlide === index ? 'true' : 'false'}
              aria-setsize={thumbnails.length}
              aria-posinset={index + 1}
              tabIndex={currentSlide === index ? 0 : -1}
              role="tab"
            ></button>
          ))}
      </nav>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
