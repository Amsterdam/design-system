/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import type { ImageSliderProps } from './ImageSlider'

import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'

export type ImageSliderThumbnailsProps = {
  /** The identifier shared with ImageSlider, used to build the matching ids for each thumbnail (tab) and its slide (tabpanel). */
  readonly baseId: string
  /** The index of the slide currently in view. */
  readonly currentSlideId: number
  /** Marks the slide with the given index as current and scrolls it into view. */
  readonly goToSlide: (id: number) => void
  /** The label for an image, used in the accessible name of each thumbnail. */
  readonly imageLabel?: string
  /** The set of images to display thumbnails for. */
  readonly thumbnails: ImageSliderProps['images']
} & Readonly<HTMLAttributes<HTMLElement>>

/**
 * A thumbnail strip for navigating between slides in an Image Slider.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs Image Slider docs at Amsterdam Design System}
 */
export const ImageSliderThumbnails = ({
  baseId,
  currentSlideId,
  goToSlide,
  imageLabel,
  thumbnails,
  ...restProps
}: ImageSliderThumbnailsProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight' && currentSlideId < thumbnails.length - 1) {
      goToSlide(currentSlideId + 1)
      ;(event.currentTarget.children[currentSlideId + 1] as HTMLElement | undefined)?.focus()
    }

    if (event.key === 'ArrowLeft' && currentSlideId > 0) {
      goToSlide(currentSlideId - 1)
      ;(event.currentTarget.children[currentSlideId - 1] as HTMLElement | undefined)?.focus()
    }
  }

  return (
    <div {...restProps} className="ams-image-slider__thumbnails" onKeyDown={handleKeyDown} role="tablist">
      {thumbnails.map(({ alt, aspectRatio, src }, index) => (
        <button
          aria-controls={`${baseId}-panel-${index}`}
          aria-selected={currentSlideId === index}
          className={clsx(
            'ams-image-slider__thumbnail',
            currentSlideId === index && 'ams-image-slider__thumbnail--in-view',
          )}
          id={`${baseId}-tab-${index}`}
          key={`${index}-${src}`}
          onClick={() => goToSlide(index)}
          role="tab"
          tabIndex={currentSlideId === index ? 0 : -1}
          type="button"
        >
          <span
            className={clsx('ams-image-slider__thumbnail-image', generateAspectRatioClass(aspectRatio))}
            style={{ backgroundImage: `url(${src})` }}
          />
          <span className="ams-visually-hidden">
            {imageLabel}: {alt}
          </span>
        </button>
      ))}
    </div>
  )
}
