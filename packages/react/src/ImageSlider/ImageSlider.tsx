/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, KeyboardEventHandler, PropsWithChildren } from 'react'
import { ImageSliderContext } from './ImageSliderContext'
import { ImageSliderItem } from './ImageSliderItem'
import { ImageSliderScroller } from './ImageSliderScroller'
import { IconButton } from '../IconButton'

export type ImageSliderProps = {
  /** Show navigation controls */
  controls?: boolean
  /** Show native scrollbar inside gallery */
  scrollbar?: boolean
  /** Prevent passing over possible snap elements */
  snapstop?: boolean
  /** Show thumbnails */
  thumbnails?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderRoot = forwardRef(
  (
    { children, className, controls, scrollbar, snapstop, thumbnails, ...restProps }: ImageSliderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [currentSlideId, setCurrentSlideId] = useState(0)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)
    const targetRef = useRef<HTMLDivElement>(null)
    const hasIntersected = new Set<IntersectionObserverEntry>()

    const inView = (observations: IntersectionObserverEntry[]) => {
      const slides = targetRef.current?.children || []
      const slidesArray = Array.from(slides)

      for (let observation of observations) {
        hasIntersected.add(observation)
        if (observation.isIntersecting) {
          setCurrentSlideId(slidesArray.indexOf(observation.target))
        }
      }
    }

    const observerOptions = {
      root: targetRef.current,
      threshold: 0.6,
    }

    useEffect(() => {
      const observer = new IntersectionObserver(inView, observerOptions)

      if (targetRef.current) {
        const slides = targetRef.current.children
        const slidesArray = Array.from(slides)
        for (let slide of slidesArray) observer.observe(slide)

        targetRef.current.addEventListener('scrollend', synchronise.bind(targetRef.current))
      }
    }, [targetRef, observerOptions])

    const synchronise = () => {
      updateControls()
    }

    const goToSlide = (element: HTMLElement) => {
      const sliderScroller = targetRef.current

      if (!sliderScroller || !element) {
        return
      }

      const delta = Math.abs(sliderScroller.offsetLeft - element.offsetLeft)

      sliderScroller.scrollTo(delta, 0)
    }

    const goToNextSlide = () => {
      const sliderScroller = targetRef.current
      const element = sliderScroller?.children[currentSlideId]
      const next = element?.nextElementSibling as HTMLElement | null

      if (element === next) return

      if (next) goToSlide(next)
    }

    const goToPreviousSlide = () => {
      const sliderScroller = targetRef.current
      const element = sliderScroller?.children[currentSlideId]
      const next = element?.previousElementSibling as HTMLElement | null

      if (element === next) return

      if (next) goToSlide(next)
    }

    const updateControls = () => {
      const sliderScroller = targetRef.current
      const { lastElementChild: last, firstElementChild: first } = sliderScroller as HTMLDivElement

      setAtStart(first === sliderScroller?.children[currentSlideId])
      setAtEnd(last === sliderScroller?.children[currentSlideId])
    }

    const createThumbnailImage = (slide: Element) => {
      return `url(${(slide as HTMLElement).querySelector('img')?.getAttribute('src')})`
    }

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide()
      } else if (e.key === 'ArrowLeft') {
        goToPreviousSlide()
      }
    }

    return (
      <ImageSliderContext.Provider value={{ currentSlide: currentSlideId }}>
        <div
          {...restProps}
          ref={ref}
          className={clsx(
            'ams-image-slider',
            controls && 'ams-image-slider--controls',
            scrollbar && 'ams-image-slider--scrollbar',
            snapstop && 'ams-image-slider--snapstop',
            thumbnails && 'ams-image-slider--thumbnails',
            className,
          )}
        >
          {controls && (
            <div className="ams-image-slider__controls" onKeyDown={handleKeyDown}>
              <IconButton
                svg={ChevronLeftIcon}
                label="Vorige"
                onBackground="dark"
                className="ams-image-slider__control ams-image-slider__control--previous"
                onClick={() => goToPreviousSlide()}
                disabled={atStart}
              />
              <IconButton
                svg={ChevronRightIcon}
                label="Volgende"
                onBackground="dark"
                className="ams-image-slider__control ams-image-slider__control--next"
                onClick={() => goToNextSlide()}
                disabled={atEnd}
              />
            </div>
          )}
          <ImageSliderScroller tabIndex={0} ref={targetRef}>
            {children}
          </ImageSliderScroller>
          {thumbnails && (
            <div className="ams-image-slider__thumbnails">
              {Array.from(targetRef.current?.children || []).map((child, index) => (
                <button
                  key={index}
                  className="ams-image-slider__thumbnail"
                  style={{ backgroundImage: createThumbnailImage(child) }}
                  onClick={() => goToSlide(child as HTMLElement)}
                >
                  {index}
                </button>
              ))}
            </div>
          )}
        </div>
      </ImageSliderContext.Provider>
    )
  },
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
