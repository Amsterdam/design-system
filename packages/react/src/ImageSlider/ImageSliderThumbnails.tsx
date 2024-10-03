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
  imageLabel?: string
  thumbnails: ImageSliderImageProps[]
} & HTMLAttributes<HTMLElement>

export const ImageSliderThumbnails = forwardRef(
  ({ className, imageLabel, thumbnails, ...restProps }: ImageSliderThumbnailsProps, ref: ForwardedRef<HTMLElement>) => {
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
        className={clsx('ams-image-slider__thumbnails', className)}
        onKeyDown={handleThumbsKeyDown}
        ref={ref}
        role="tablist"
      >
        {thumbnails &&
          thumbnails.map((thumbnail, index) => (
            <button
              aria-label={`${imageLabel} ${index + 1}: ${thumbnail.alt}`}
              aria-posinset={index + 1}
              aria-selected={currentSlideId === index ? 'true' : 'false'}
              aria-setsize={thumbnails.length}
              className={clsx(
                'ams-image-slider__thumbnail',
                currentSlideId === index && 'ams-image-slider__thumbnail--in-view',
                thumbnail.aspectRatio && `ams-aspect-ratio--${thumbnail.aspectRatio}`,
              )}
              key={index}
              onClick={() => goToSlideId(index)}
              role="tab"
              style={{ backgroundImage: `url(${thumbnail.src})` }}
              tabIndex={currentSlideId === index ? 0 : -1}
            />
          ))}
      </nav>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
