/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { ImageSliderControls } from './ImageSliderControls'
import { ImageSliderItem } from './ImageSliderItem'
import { ImageSliderScroller } from './ImageSliderScroller'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import { Image, ImageProps } from '../Image/Image'
import { AspectRatioProps } from '../common/aspectRatio'

export type ImageSliderImageProps = ImageProps & AspectRatioProps

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

export const ImageSliderRoot = forwardRef(
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
    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const targetRef = useRef<HTMLDivElement>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const inView = useCallback((observations: IntersectionObserverEntry[]) => {
      const images = Array.from(targetRef.current?.children || [])

      observations.forEach((observation) => {
        if (observation.isIntersecting) {
          setCurrentSlideId(images.indexOf(observation.target as HTMLElement))
        }
      })
    }, [])

    const observerOptions = useMemo(
      () => ({
        root: targetRef.current,
        threshold: 0.6,
      }),
      [],
    )

    const updateControls = useCallback(() => {
      const sliderScrollerElement = targetRef.current
      if (!sliderScrollerElement) return

      const { lastElementChild: lastElement, firstElementChild: firstElement } = sliderScrollerElement as HTMLDivElement

      setIsAtStart(firstElement === sliderScrollerElement?.children[currentSlideId])
      setIsAtEnd(lastElement === sliderScrollerElement?.children[currentSlideId])
    }, [currentSlideId])

    useEffect(() => {
      if (targetRef.current) {
        observerRef.current = new IntersectionObserver(inView, observerOptions)
        const observer = observerRef.current

        const slides = Array.from(targetRef.current.children)
        slides.forEach((slide) => observer.observe(slide))

        targetRef.current.addEventListener('scrollend', synchronise)

        updateControls()

        return () => {
          slides.forEach((slide) => observer.unobserve(slide))
          targetRef.current?.removeEventListener('scrollend', synchronise)
        }
      }

      return undefined
    }, [inView, observerOptions, updateControls])

    const synchronise = useCallback(() => updateControls(), [updateControls])

    const goToSlide = useCallback((element: HTMLElement) => {
      const sliderScrollerElement = targetRef.current
      if (!sliderScrollerElement || !element) return

      sliderScrollerElement.scrollTo({
        left: sliderScrollerElement.scrollLeft + element.offsetLeft - sliderScrollerElement.scrollLeft,
      })
    }, [])

    const goToSlideId = useCallback(
      (id: number) => {
        const element = targetRef.current?.children[id] as HTMLElement | null
        if (element) goToSlide(element)
      },
      [goToSlide],
    )

    const goToNextSlide = useCallback(() => {
      const element = targetRef.current?.children[currentSlideId]
      const nextElement = element?.nextElementSibling as HTMLElement | null

      if (nextElement) goToSlide(nextElement)
    }, [currentSlideId, goToSlide])

    const goToPreviousSlide = useCallback(() => {
      const element = targetRef.current?.children[currentSlideId]
      const previousElement = element?.previousElementSibling as HTMLElement | null

      if (previousElement) goToSlide(previousElement)
    }, [currentSlideId, goToSlide])

    useEffect(() => {
      const handleResize = () => {
        const sliderScrollerElement = targetRef.current
        const currentSlideElement = targetRef.current?.children[currentSlideId] as HTMLElement | null

        if (!sliderScrollerElement || !currentSlideElement) return

        const expectedScrollLeft = currentSlideElement.offsetLeft

        if (Math.abs(sliderScrollerElement.scrollLeft - expectedScrollLeft) < 1) return

        goToSlide(currentSlideElement)
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [currentSlideId, goToSlide])

    return (
      <ImageSliderContext.Provider
        value={{ isAtStart, isAtEnd, currentSlideId, goToNextSlide, goToPreviousSlide, goToSlideId }}
      >
        <div
          {...restProps}
          aria-roledescription="carousel"
          className={clsx('ams-image-slider', controls && 'ams-image-slider--controls', className)}
          tabIndex={-1}
          ref={ref}
        >
          {controls && <ImageSliderControls nextLabel={nextLabel} previousLabel={previousLabel} />}
          <ImageSliderScroller aria-live="polite" ref={targetRef} role="group" tabIndex={0}>
            {images.map(({ alt, aspectRatio, sizes, src, srcSet }, index) => (
              <ImageSliderItem key={index} slideId={index}>
                <Image
                  alt={alt}
                  className={`ams-aspect-ratio--${aspectRatio}`}
                  sizes={sizes}
                  src={src}
                  srcSet={srcSet}
                />
              </ImageSliderItem>
            ))}
          </ImageSliderScroller>
          <ImageSliderThumbnails imageLabel={imageLabel} thumbnails={images} />
        </div>
      </ImageSliderContext.Provider>
    )
  },
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
