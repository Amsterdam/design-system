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

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      const target = event.target as HTMLElement
      const element = target.parentElement?.children[currentSlideId]

      if (event.key === 'ArrowRight') {
        const nextElement = element?.nextElementSibling as HTMLElement | null

        if (nextElement === element) return

        if (nextElement) {
          nextElement.focus()
          goToNextSlide()
        }
      }

      if (event.key === 'ArrowLeft') {
        const previousElement = element?.previousElementSibling as HTMLElement | null

        if (previousElement === element) return

        if (previousElement) {
          previousElement.focus()
          goToPreviousSlide()
        }
      }
    }

    return (
      <nav
        {...restProps}
        className={clsx('ams-image-slider__thumbnails', className)}
        onKeyDown={handleKeyDown}
        ref={ref}
        role="tablist"
      >
        {thumbnails.map(({ alt, aspectRatio, src }, index) => (
          <button
            aria-label={`${imageLabel} ${index + 1}: ${alt}`}
            aria-posinset={index + 1}
            aria-selected={currentSlideId === index ? 'true' : 'false'}
            aria-setsize={thumbnails.length}
            className={clsx(
              'ams-image-slider__thumbnail',
              aspectRatio && `ams-aspect-ratio--${aspectRatio}`,
              currentSlideId === index && 'ams-image-slider__thumbnail--in-view',
            )}
            key={index}
            onClick={() => goToSlideId(index)}
            role="tab"
            style={{ backgroundImage: `url(${src})` }}
            tabIndex={currentSlideId === index ? 0 : -1}
          />
        ))}
      </nav>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
