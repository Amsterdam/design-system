/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { ImageSliderItem } from './ImageSliderItem'
import { ImageSliderScroller } from './ImageSliderScroller'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import { Ratio } from '../AspectRatio'
import { IconButton } from '../IconButton'
import { Image, ImageProps } from '../Image/Image'

export type ImageSliderImageProps = ImageProps & {
  /** Define an aspect ratio to use on all images */
  ratio: Ratio
  /** Describe to image */
}

export type ImageSliderProps = {
  /** Show navigation controls */
  controls?: boolean
  /** Label for the image if you need to translate the alt text */
  imageLabel?: string
  /** Label for the next button */
  nextLabel?: string
  /** Label for the previous button */
  previousLabel?: string
  /** An array of images to display */
  images: ImageSliderImageProps[]
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderRoot = forwardRef(
  (
    {
      className,
      controls,
      imageLabel = 'Afbeelding',
      nextLabel = 'Volgende',
      previousLabel = 'Vorige',
      images,
      ...restProps
    }: ImageSliderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [currentSlideId, setCurrentSlideId] = useState(0)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)
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

      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowLeft':
            goToPreviousSlide()
            break
          case 'ArrowRight':
            goToNextSlide()
            break
        }
      }

      if (targetRef.current) {
        const images = Array.from(targetRef.current.children)
        for (let slide of images) observer.observe(slide)

        targetRef.current.addEventListener('scrollend', synchronise)
        targetRef.current.addEventListener('keydown', handleKeyDown)
      }

      return () => {
        if (targetRef.current) {
          targetRef.current.removeEventListener('scrollend', synchronise)
          targetRef.current.removeEventListener('keydown', handleKeyDown)
        }
      }
    }, [targetRef, observerOptions])

    const synchronise = () => {
      updateControls()
    }

    const handleThumbsKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
      const target = event.target as HTMLElement
      const element = target.parentElement?.children[currentSlideId]

      if (event.key === 'ArrowRight') {
        const next = element?.nextElementSibling as HTMLElement | null

        if (next === element) return

        if (next) {
          next.focus()
          goToNextSlide()
        }
      }

      if (event.key === 'ArrowLeft') {
        const previous = element?.previousElementSibling as HTMLElement | null

        if (previous === element) return

        if (previous) {
          previous.focus()
          goToPreviousSlide()
        }
      }
    }

    const goToSlide = (element: HTMLElement) => {
      const sliderScroller = targetRef.current

      if (!sliderScroller || !element) {
        return
      }

      const delta = Math.abs(sliderScroller.offsetLeft - element.offsetLeft)

      sliderScroller.scrollTo(delta, 0)
    }

    const goToSlideId = (id: number) => {
      const element = targetRef.current?.children[id] as HTMLElement

      goToSlide(element)
    }

    const goToNextSlide = () => {
      const element = targetRef.current?.children[currentSlideId]
      const next = element?.nextElementSibling as HTMLElement | null

      if (element === next) return

      if (next) goToSlide(next)
    }

    const goToPreviousSlide = () => {
      const element = targetRef.current?.children[currentSlideId]
      const previous = element?.previousElementSibling as HTMLElement | null

      if (element === previous) return

      if (previous) goToSlide(previous)
    }

    const updateControls = () => {
      const sliderScroller = targetRef.current
      const { lastElementChild: last, firstElementChild: first } = sliderScroller as HTMLDivElement

      setAtStart(first === sliderScroller?.children[currentSlideId])
      setAtEnd(last === sliderScroller?.children[currentSlideId])
    }

    return (
      <ImageSliderContext.Provider value={{ currentSlide: currentSlideId, goToSlideId }}>
        <div
          {...restProps}
          ref={ref}
          aria-roledescription="carousel"
          tabIndex={-1}
          className={clsx('ams-image-slider', controls && 'ams-image-slider--controls', className)}
        >
          {controls && (
            <div className="ams-image-slider__controls">
              <IconButton
                svg={ChevronLeftIcon}
                label={previousLabel}
                inverseColor={true}
                className="ams-image-slider__control ams-image-slider__control--previous"
                onClick={() => goToPreviousSlide()}
                disabled={atStart}
              />
              <IconButton
                svg={ChevronRightIcon}
                label={nextLabel}
                inverseColor={true}
                className="ams-image-slider__control ams-image-slider__control--next"
                onClick={() => goToNextSlide()}
                disabled={atEnd}
              />
            </div>
          )}
          <ImageSliderScroller tabIndex={0} ref={targetRef} aria-live="polite" role="group">
            {images.map((image, index) => (
              <ImageSliderItem key={index} slideId={index}>
                <Image
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  alt={image.alt}
                  className={`ams-aspect-ratio--${image.ratio}`}
                />
              </ImageSliderItem>
            ))}
          </ImageSliderScroller>
          <ImageSliderThumbnails
            thumbnails={images}
            imageLabel={imageLabel}
            currentSlide={currentSlideId}
            onKeyDown={handleThumbsKeyDown}
          />
        </div>
      </ImageSliderContext.Provider>
    )
  },
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
