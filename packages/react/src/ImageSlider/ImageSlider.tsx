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

export type ImageSliderImageProps = ImageProps

export type ImageSliderProps = {
  /** Display buttons to navigate to the previous or next image. */
  controls?: boolean
  /** Label for the image if you need to translate the alt text. */
  imageLabel?: string
  /** The set of images to display. */
  images: ImageSliderImageProps[]
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
    const [currentSlideId, setCurrentSlideId] = useState(0)

    const scrollerRef = useRef<HTMLDivElement>(null)

    const isAtStart = currentSlideId === 0
    const isAtEnd = currentSlideId === images.length - 1

    // Navigation functions
    const goToSlide = (element: HTMLElement) => {
      const scrollerElement = scrollerRef.current
      if (!scrollerElement) return

      scrollerElement.scrollTo({
        left: element.offsetLeft,
      })
    }

    const goToSlideById = (id: number) => {
      const element = scrollerRef.current?.children[id] as HTMLElement | null
      if (element) goToSlide(element)
    }

    const goToNextSlide = () => {
      const element = scrollerRef.current?.children[currentSlideId]
      const nextElement = element?.nextElementSibling as HTMLElement | null

      if (nextElement) goToSlide(nextElement)
    }

    const goToPreviousSlide = () => {
      const element = scrollerRef.current?.children[currentSlideId]
      const previousElement = element?.previousElementSibling as HTMLElement | null

      if (previousElement) goToSlide(previousElement)
    }

    useEffect(() => {
      if (!scrollerRef.current) return undefined

      const handleIntersection = (observations: IntersectionObserverEntry[]) => {
        const images = Array.from(scrollerRef.current?.children || [])

        observations.forEach((observation) => {
          if (observation.isIntersecting) {
            setCurrentSlideId(images.indexOf(observation.target as HTMLElement))
          }
        })
      }

      const observerOptions = {
        root: scrollerRef.current,
        threshold: 0.6,
      }

      const observer = new IntersectionObserver(handleIntersection, observerOptions)

      const slides = Array.from(scrollerRef.current.children)
      slides.forEach((slide) => observer.observe(slide))

      return () => observer.disconnect()
    }, [])

    const handleWindowResize = () => {
      const scrollerElement = scrollerRef.current
      const currentSlideElement = scrollerRef.current?.children[currentSlideId] as HTMLElement | null

      if (!scrollerElement || !currentSlideElement) return

      const expectedScrollLeft = currentSlideElement.offsetLeft

      if (Math.abs(scrollerElement.scrollLeft - expectedScrollLeft) < 1) return

      goToSlide(currentSlideElement)
    }

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }, [handleWindowResize])

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
            <ImageSliderControl disabled={isAtStart} icon={ChevronBackwardIcon} iconOnly onClick={goToPreviousSlide}>
              {previousLabel}
            </ImageSliderControl>
            <ImageSliderControl disabled={isAtEnd} icon={ChevronForwardIcon} iconOnly onClick={goToNextSlide}>
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
          goToNextSlide={goToNextSlide}
          goToPreviousSlide={goToPreviousSlide}
          goToSlideById={goToSlideById}
          imageLabel={imageLabel}
          thumbnails={images}
        />
      </div>
    )
  },
)

ImageSlider.displayName = 'ImageSlider'
