/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, KeyboardEvent } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useCallback, useContext, useMemo } from 'react'

import type { ImageSliderImageProps } from './ImageSlider'

import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderThumbnailsProps = HTMLAttributes<HTMLElement> & {
  imageLabel?: string
  thumbnails: ImageSliderImageProps[]
}

export const ImageSliderThumbnails = forwardRef(
  ({ className, imageLabel, thumbnails, ...restProps }: ImageSliderThumbnailsProps, ref: ForwardedRef<HTMLElement>) => {
    const { currentSlideId, goToNextSlide, goToPreviousSlide, goToSlideId } = useContext(ImageSliderContext)

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLElement>) => {
        const element = event.currentTarget.children[currentSlideId]

        if (event.key === 'ArrowRight') {
          const nextElement = element?.nextElementSibling as HTMLElement | null

          if (nextElement) {
            nextElement.focus()
            goToNextSlide()
          }
        }

        if (event.key === 'ArrowLeft') {
          const previousElement = element?.previousElementSibling as HTMLElement | null

          if (previousElement) {
            previousElement.focus()
            goToPreviousSlide()
          }
        }
      },
      [currentSlideId, goToNextSlide, goToPreviousSlide],
    )

    const renderThumbnails = useMemo(
      () =>
        thumbnails.map(({ alt, aspectRatio, src }, index) => (
          <button
            aria-label={`${imageLabel} ${index + 1}: ${alt}`}
            aria-posinset={index + 1}
            aria-selected={currentSlideId === index ? 'true' : 'false'}
            aria-setsize={thumbnails.length}
            className={clsx(
              'ams-image-slider__thumbnail',
              currentSlideId === index && 'ams-image-slider__thumbnail--in-view',
              generateAspectRatioClass(aspectRatio),
            )}
            key={index}
            onClick={() => goToSlideId(index)}
            role="tab"
            style={{ backgroundImage: `url(${src})` }}
            tabIndex={currentSlideId === index ? 0 : -1}
            type="button"
          />
        )),
      [currentSlideId, goToSlideId, imageLabel, thumbnails],
    )

    return (
      <nav
        {...restProps}
        className={clsx('ams-image-slider__thumbnails', className)}
        onKeyDown={handleKeyDown}
        ref={ref}
        role="tablist"
      >
        {renderThumbnails}
      </nav>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
