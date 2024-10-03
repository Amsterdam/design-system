/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { ImageSliderControls } from './ImageSliderControls'
import { ImageSliderItem } from './ImageSliderItem'
import { ImageSliderScroller } from './ImageSliderScroller'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import { Ratio } from '../AspectRatio'
import { Image, ImageProps } from '../Image/Image'

export type ImageSliderImageProps = ImageProps & {
  /** Specify the aspect ratio to use for the images. */
  aspectRatio: Ratio
}

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
    const hasIntersected = new Set<IntersectionObserverEntry>()

    const inView = (observations: IntersectionObserverEntry[]) => {
      const images = Array.from(targetRef.current?.children || [])

      for (let observation of observations) {
        hasIntersected.add(observation)

        if (observation.isIntersecting) {
          setCurrentSlideId(images.indexOf(observation.target as HTMLElement))
        }
      }
    }

    const observerOptions = {
      root: targetRef.current,
      threshold: 0.6,
    }

    useEffect(() => {
      const observer = new IntersectionObserver(inView, observerOptions)

      const keyActionMap = {
        ArrowLeft: goToPreviousSlide,
        ArrowRight: goToNextSlide,
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        const action = keyActionMap[event.key as keyof typeof keyActionMap]
        action?.()
      }

      if (targetRef.current) {
        const slides = Array.from(targetRef.current.children)
        for (let slide of slides) observer.observe(slide)

        targetRef.current.addEventListener('scrollend', synchronise)
        targetRef.current.addEventListener('keydown', handleKeyDown)
      }

      return () => {
        if (targetRef.current) {
          targetRef.current.removeEventListener('scrollend', synchronise)
          targetRef.current.removeEventListener('keydown', handleKeyDown)
        }
      }
    }, [observerOptions, targetRef])

    const synchronise = () => updateControls()

    const goToSlide = (element: HTMLElement) => {
      const sliderScrollerElement = targetRef.current

      if (!sliderScrollerElement || !element) return

      const delta = Math.abs(sliderScrollerElement.offsetLeft - element.offsetLeft)

      sliderScrollerElement.scrollTo(delta, 0)
    }

    const goToSlideId = (id: number) => {
      const element = targetRef.current?.children[id] as HTMLElement | null

      if (element) goToSlide(element)
    }

    const goToNextSlide = () => {
      const element = targetRef.current?.children[currentSlideId]
      const nextElement = element?.nextElementSibling as HTMLElement | null

      if (element === nextElement) return

      if (nextElement) goToSlide(nextElement)
    }

    const goToPreviousSlide = () => {
      const element = targetRef.current?.children[currentSlideId]
      const previousElement = element?.previousElementSibling as HTMLElement | null

      if (element === previousElement) return

      if (previousElement) goToSlide(previousElement)
    }

    const updateControls = () => {
      const sliderScrollerElement = targetRef.current
      const { lastElementChild: lastElement, firstElementChild: firstElement } = sliderScrollerElement as HTMLDivElement

      setIsAtStart(firstElement === sliderScrollerElement?.children[currentSlideId])
      setIsAtEnd(lastElement === sliderScrollerElement?.children[currentSlideId])
    }

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
