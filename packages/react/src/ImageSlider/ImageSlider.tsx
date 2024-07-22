/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
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
    const [currentSlide, setCurrentSlide] = useState(0)
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const sliderScroller = targetRef.current

      if (!sliderScroller) {
        return
      }

      const slides = sliderScroller.querySelectorAll('.ams-image-slider__item')
      const slidesArray = Array.from(slides)
      const hasIntersected = new Set()

      const observer = new IntersectionObserver(
        (observations) => {
          for (let observation of observations) {
            hasIntersected.add(observation)
            observation.target.classList.toggle('ams-image-slider__item--in-view', observation.isIntersecting)
            if (observation.isIntersecting) setCurrentSlide(slidesArray.indexOf(observation.target))
          }
        },
        {
          root: sliderScroller,
          threshold: 0.6,
        },
      )

      for (let slide of slidesArray) observer.observe(slide)
    }, [])

    const goToSlide = (element: HTMLElement) => {
      const sliderScroller = targetRef.current

      if (!sliderScroller || !element) {
        return
      }

      const delta = Math.abs(sliderScroller.offsetLeft - element.offsetLeft)
      const scrollerPadding = parseInt(getComputedStyle(sliderScroller).getPropertyValue('padding-left'), 10)

      const pos = sliderScroller.clientWidth / 2 > delta ? delta - scrollerPadding : delta + scrollerPadding

      sliderScroller.scrollTo(pos, 0)
    }

    const goToNextSlide = (element: HTMLElement) => {
      const next = element.nextElementSibling as HTMLElement | null

      if (element === next) return

      if (next) {
        goToSlide(next)
      } else {
        console.log('at the end')
        // goToSlide(element.parentElement?.firstElementChild as HTMLElement)
      }
    }

    const goToPreviousSlide = (element: HTMLElement) => {
      const next = element.previousElementSibling as HTMLElement | null

      if (element === next) return

      if (next) {
        goToSlide(next)
      } else {
        console.log('at the start')
        // goToSlide(element.parentElement?.lastElementChild as HTMLElement)
      }
    }

    return (
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
          <div className="ams-image-slider__controls">
            <IconButton
              svg={ChevronLeftIcon}
              label="Vorige"
              onBackground="dark"
              className="ams-image-slider__control ams-image-slider__control--previous"
              onClick={() =>
                goToPreviousSlide(document.querySelector('.ams-image-slider__item--in-view') as HTMLElement)
              }
            />
            <IconButton
              svg={ChevronRightIcon}
              label="Volgende"
              onBackground="dark"
              className="ams-image-slider__control ams-image-slider__control--next"
              onClick={() => goToNextSlide(document.querySelector('.ams-image-slider__item--in-view') as HTMLElement)}
            />
          </div>
        )}
        <ImageSliderScroller ref={targetRef} currentSlide={currentSlide}>
          {children}
        </ImageSliderScroller>
      </div>
    )
  },
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
