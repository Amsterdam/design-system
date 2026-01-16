/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import type { ImageSliderProps } from './ImageSlider'

import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'

export type ImageSliderThumbnailsProps = {
  currentSlideId: number
  imageLabel?: string
  scrollToNextSlide: () => void
  scrollToPreviousSlide: () => void
  scrollToSlideById: (id: number) => void
  thumbnails: ImageSliderProps['images']
} & HTMLAttributes<HTMLElement>

export const ImageSliderThumbnails = ({
  currentSlideId,
  imageLabel,
  scrollToNextSlide,
  scrollToPreviousSlide,
  scrollToSlideById,
  thumbnails,
}: ImageSliderThumbnailsProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const element = event.currentTarget.children[currentSlideId]

    if (event.key === 'ArrowRight') {
      const nextElement = element?.nextElementSibling as HTMLElement | null

      if (nextElement) {
        nextElement.focus()
        scrollToNextSlide()
      }
    }

    if (event.key === 'ArrowLeft') {
      const previousElement = element?.previousElementSibling as HTMLElement | null

      if (previousElement) {
        previousElement.focus()
        scrollToPreviousSlide()
      }
    }
  }

  return (
    <nav className="ams-image-slider__thumbnails" onKeyDown={handleKeyDown} role="tablist">
      {thumbnails.map(({ alt, aspectRatio, src }, index) => (
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
          key={`${alt}-${index}`}
          onClick={() => scrollToSlideById(index)}
          role="tab"
          style={{ backgroundImage: `url(${src})` }}
          tabIndex={currentSlideId === index ? 0 : -1}
          type="button"
        />
      ))}
    </nav>
  )
}
