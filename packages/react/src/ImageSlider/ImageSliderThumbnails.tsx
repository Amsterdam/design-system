/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, KeyboardEvent, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderImageProps } from './ImageSlider'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderThumbnailsProps = {
  thumbnails: ImageSliderImageProps[]
  imageLabel?: string
} & HTMLAttributes<HTMLElement>

export const ImageSliderThumbnails = forwardRef(
  ({ thumbnails, imageLabel, className, ...restProps }: ImageSliderThumbnailsProps, ref: ForwardedRef<HTMLElement>) => {
    const { currentSlideId, goToNextSlide, goToPreviousSlide, goToSlideId } = useContext(ImageSliderContext)

    const handleThumbsKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      const target = event.target as HTMLElement
      const element = target.parentElement?.children[currentSlideId]

      if (event.key === 'ArrowRight') {
        const next = element?.nextElementSibling as HTMLElement | null

        if (next === element) return

        if (next) {
          next.focus()
          goToNextSlide()
        }
      }

      if (event.key === 'ArrowLeft') {
        const previous = element?.previousElementSibling as HTMLElement | null

        if (previous === element) return

        if (previous) {
          previous.focus()
          goToPreviousSlide()
        }
      }
    }

    return (
      <nav
        {...restProps}
        ref={ref}
        className={clsx('ams-image-slider__thumbnails', className)}
        role="tablist"
        onKeyDown={handleThumbsKeyDown}
      >
        {thumbnails &&
          thumbnails.map((thumbnail, index) => (
            <button
              key={index}
              className={clsx(
                'ams-image-slider__thumbnail',
                thumbnail.ratio && `ams-aspect-ratio--${thumbnail.ratio}`,
                currentSlideId === index && 'ams-image-slider__thumbnail--in-view',
              )}
              onClick={() => goToSlideId(index)}
              style={{ backgroundImage: `url(${thumbnail.src})` }}
              aria-label={`${imageLabel} ${index + 1}: ${thumbnail.alt}`}
              aria-selected={currentSlideId === index ? 'true' : 'false'}
              aria-setsize={thumbnails.length}
              aria-posinset={index + 1}
              tabIndex={currentSlideId === index ? 0 : -1}
              role="tab"
            ></button>
          ))}
      </nav>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
