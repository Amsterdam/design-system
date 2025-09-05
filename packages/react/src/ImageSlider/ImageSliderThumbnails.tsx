/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, KeyboardEvent, useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderImageProps } from './ImageSlider'
import { ImageSliderContext } from './ImageSliderContext'
import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'

export type ImageSliderThumbnailsProps = {
  imageLabel?: string
  thumbnails: ImageSliderImageProps[]
} & HTMLAttributes<HTMLElement>

export const ImageSliderThumbnails = forwardRef(
  ({ className, imageLabel, thumbnails, ...restProps }: ImageSliderThumbnailsProps, ref: ForwardedRef<HTMLElement>) => {
    const { currentSlideId, goToNextSlide, goToPreviousSlide, goToSlideId } = useContext(ImageSliderContext)

    // Create refs for each thumbnail
    const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

    // Scroll the image’s thumbnail into view after sliding
    useEffect(() => {
      const currentThumbnail = thumbnailRefs.current[currentSlideId]

      if (currentThumbnail) {
        currentThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
      }
    }, [currentSlideId])

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
            ref={(el) => (thumbnailRefs.current[index] = el)}
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
