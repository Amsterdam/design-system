/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'

import type { ImageProps } from '../Image/Image'

import { Image } from '../Image/Image'
import { ImageSliderControl } from './ImageSliderControl'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import {
  scrollToCurrentSlideOnResize,
  scrollToNextSlide,
  scrollToPreviousSlide,
  scrollToSlide,
  scrollToSlideById,
  setCurrentSlideIdToVisibleSlide,
} from './utils'

export type ImageSliderProps = {
  /** Display buttons to navigate to the previous or next image. */
  controls?: boolean
  /** Label for the image if you need to translate the alt text. */
  imageLabel?: string
  /** The set of images to display. */
  images: ImageProps[]
  /** The label for the ‘next’ button */
  nextLabel?: string
  /** The label for the ‘previous’ button */
  previousLabel?: string
} & HTMLAttributes<HTMLDivElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs Image Slider docs at Amsterdam Design System}
 */
export const ImageSlider = forwardRef(
  (
    {
      className,
      controls,
      imageLabel = 'Afbeelding',
      images,
      nextLabel = 'Volgende',
      previousLabel = 'Vorige',
      ...restProps
    }: ImageSliderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (images.length === 0) return null

    const [currentSlideId, setCurrentSlideId] = useState(0)

    const scrollerRef = useRef<HTMLDivElement>(null)

    const isAtStart = currentSlideId === 0
    const isAtEnd = currentSlideId === images.length - 1

    useEffect(() => {
      if (!scrollerRef.current) return undefined

      const observerOptions = {
        root: scrollerRef.current,
        threshold: 0.6,
      }

      const observer = new IntersectionObserver(
        (observations) => setCurrentSlideIdToVisibleSlide({ observations, ref: scrollerRef, setCurrentSlideId }),
        observerOptions,
      )

      const slides = Array.from(scrollerRef.current.children)
      slides.forEach((slide) => observer.observe(slide))

      return () => observer.disconnect()
    }, [])

    useEffect(() => {
      const handleResize = () => scrollToCurrentSlideOnResize({ currentSlideId, ref: scrollerRef, scrollToSlide })

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, [currentSlideId])

    return (
      <div
        {...restProps}
        aria-roledescription="carousel"
        className={clsx(
          'ams-image-slider',
          // The 'ams-image-slider--controls' class is @deprecated and will be removed in a future release.
          controls && 'ams-image-slider--controls',
          className,
        )}
        ref={ref}
      >
        {controls && (
          <div className="ams-image-slider__controls">
            <ImageSliderControl
              disabled={isAtStart}
              icon={ChevronBackwardIcon}
              iconOnly
              onClick={() => scrollToPreviousSlide(currentSlideId, scrollerRef)}
            >
              {previousLabel}
            </ImageSliderControl>
            <ImageSliderControl
              disabled={isAtEnd}
              icon={ChevronForwardIcon}
              iconOnly
              onClick={() => scrollToNextSlide(currentSlideId, scrollerRef)}
            >
              {nextLabel}
            </ImageSliderControl>
          </div>
        )}
        <div aria-live="polite" className="ams-image-slider__scroller" ref={scrollerRef} role="group" tabIndex={0}>
          {images.map(({ alt, aspectRatio, sizes, src, srcSet }, index) => (
            <Image
              alt={alt}
              aria-hidden={index !== currentSlideId ? true : undefined}
              aspectRatio={aspectRatio}
              className={clsx(
                'ams-image-slider__item',
                // The 'ams-image-slider__item--in-view' class is @deprecated and will be removed in a future release.
                index === currentSlideId && 'ams-image-slider__item--in-view',
              )}
              key={`${alt}-${index}`}
              sizes={sizes}
              src={src}
              srcSet={srcSet}
            />
          ))}
        </div>
        <ImageSliderThumbnails
          currentSlideId={currentSlideId}
          imageLabel={imageLabel}
          scrollToNextSlide={() => scrollToNextSlide(currentSlideId, scrollerRef)}
          scrollToPreviousSlide={() => scrollToPreviousSlide(currentSlideId, scrollerRef)}
          scrollToSlideById={(id) => scrollToSlideById(id, scrollerRef)}
          thumbnails={images}
        />
      </div>
    )
  },
)

ImageSlider.displayName = 'ImageSlider'
