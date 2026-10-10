/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'

import type { ImageProps } from '../Image/Image'

import { Button } from '../Button/Button'
import { ImageSliderSlide } from './ImageSliderSlide'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import { debounce } from './utils/debounce'
import { scrollToCurrentSlideOnResize } from './utils/scrollToCurrentSlideOnResize'
import { scrollToSlide } from './utils/scrollToSlide'
import { setCurrentSlideIdToVisibleSlide } from './utils/setCurrentSlideIdToVisibleSlide'

export type ImageSliderImageProps = {
  /** An optional caption displayed below the image. */
  readonly caption?: string
} & Readonly<ImageProps>

export type ImageSliderProps = {
  /** The name announced by screen readers for the image slider. */
  readonly accessibleName?: string
  /** Display buttons to navigate to the previous or next image. */
  readonly controls?: boolean
  /** Label for the image if you need to translate the alt text. */
  readonly imageLabel?: string
  /** The set of images to display. */
  readonly images: ImageSliderImageProps[]
  /** The label for the ‘next’ button. */
  readonly nextLabel?: string
  /** The label for the ‘previous’ button. */
  readonly previousLabel?: string
} & Readonly<HTMLAttributes<HTMLElement>>

/**
 * Displays a small set of images in a limited space.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs Image Slider docs at Amsterdam Design System}
 */
export const ImageSlider = forwardRef(
  (
    {
      accessibleName = 'Afbeeldingen',
      className,
      controls,
      imageLabel = 'Afbeelding',
      images,
      nextLabel = 'Volgende',
      previousLabel = 'Vorige',
      ...restProps
    }: ImageSliderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [currentSlideId, setCurrentSlideId] = useState(0)

    const scrollerRef = useRef<HTMLDivElement>(null)

    const baseId = useId()
    const labelId = `${baseId}-label`

    // Prevents the IntersectionObserver from changing the selected slide while scrolling to a selected slide.
    const isProgrammaticScroll = useRef(false)

    const goToSlide = (id: number) => {
      isProgrammaticScroll.current = true
      setCurrentSlideId(id)
      scrollToSlide(id, scrollerRef)
    }

    useEffect(() => {
      const scroller = scrollerRef.current
      if (!scroller) return undefined

      const handleScrollEnd = () => {
        isProgrammaticScroll.current = false
      }

      const observerOptions = {
        root: scroller,
        threshold: 0.6,
      }

      const observer = new IntersectionObserver((observations) => {
        if (isProgrammaticScroll.current) return
        setCurrentSlideIdToVisibleSlide({ observations, ref: scrollerRef, setCurrentSlideId })
      }, observerOptions)

      const slides = Array.from(scroller.children)
      slides.forEach((slide) => observer.observe(slide))

      scroller.addEventListener('scrollend', handleScrollEnd)

      return () => {
        observer.disconnect()
        scroller.removeEventListener('scrollend', handleScrollEnd)
      }
    }, [])

    useEffect(() => {
      if (images.length === 0) return undefined

      const handleResize = debounce(() => scrollToCurrentSlideOnResize({ currentSlideId, ref: scrollerRef }), 100)

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, [currentSlideId, images.length])

    if (images.length === 0) return null

    const isAtStart = currentSlideId === 0
    const isAtEnd = currentSlideId === images.length - 1

    return (
      <section
        {...restProps}
        aria-labelledby={labelId}
        aria-roledescription="carousel"
        className={clsx('ams-image-slider', className)}
        ref={ref}
      >
        {controls && (
          <div className="ams-image-slider__controls">
            <Button
              className="ams-image-slider__control"
              disabled={isAtStart}
              icon={ChevronBackwardIcon}
              iconOnly
              onClick={() => goToSlide(currentSlideId - 1)}
            >
              {previousLabel}
            </Button>
            <Button
              className="ams-image-slider__control"
              disabled={isAtEnd}
              icon={ChevronForwardIcon}
              iconOnly
              onClick={() => goToSlide(currentSlideId + 1)}
            >
              {nextLabel}
            </Button>
          </div>
        )}

        <span className="ams-visually-hidden" id={labelId}>
          {accessibleName}
        </span>

        <div aria-live="polite" className="ams-image-slider__scroller" ref={scrollerRef}>
          {images.map((image, index) => (
            <ImageSliderSlide
              key={`${index}-${image.src}`}
              {...image}
              currentSlideId={currentSlideId}
              id={`${baseId}-panel-${index}`}
              index={index}
              tabId={`${baseId}-tab-${index}`}
            />
          ))}
        </div>
        <ImageSliderThumbnails
          baseId={baseId}
          currentSlideId={currentSlideId}
          goToSlide={goToSlide}
          imageLabel={imageLabel}
          thumbnails={images}
        />
      </section>
    )
  },
)

ImageSlider.displayName = 'ImageSlider'
