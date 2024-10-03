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
  /** Define an aspect ratio to use on the image */
  ratio: Ratio
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
    }, [observerOptions, targetRef])

    const synchronise = () => updateControls()

    const goToSlide = (element: HTMLElement) => {
      const sliderScroller = targetRef.current

      if (!sliderScroller || !element) return

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
      <ImageSliderContext.Provider
        value={{ atStart, atEnd, currentSlideId, goToNextSlide, goToPreviousSlide, goToSlideId }}
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
            {images.map(({ alt, ratio, sizes, src, srcSet }, index) => (
              <ImageSliderItem key={index} slideId={index}>
                <Image alt={alt} className={`ams-aspect-ratio--${ratio}`} sizes={sizes} src={src} srcSet={srcSet} />
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
