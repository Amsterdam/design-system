/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { ImageSliderItem } from './ImageSliderItem'
// import useInViewPort from './useInViewPort'
import { ImageSliderScroller } from './ImageSliderScroller'
import { IconButton } from '../IconButton'

export type ImageSliderProps = {
  controls?: boolean
  scrollbar?: boolean
  snapstop?: boolean
  thumbnails?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderRoot = forwardRef(
  (
    { children, className, controls, scrollbar, snapstop, thumbnails, ...restProps }: ImageSliderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const targetRef = useRef<HTMLDivElement>(null)
    // const inViewport = useInViewPort(targetRef, { threshold: 0.5 })
    // console.log(currentSlideIndex)

    useEffect(() => {
      const sliderScroller = targetRef.current

      if (!sliderScroller) {
        return
      }

      const slides = sliderScroller.querySelectorAll('.ams-image-slider__item')
      const slidesArray = Array.from(slides)
      // const hasIntersected = new Set()

      console.log(slidesArray)
      const observer = new IntersectionObserver(
        // (observations) => {
        //   for (let observation of observations) {
        //     hasIntersected.add(observation)

        //     console.log(observation)
        //     // toggle --in-view class if intersecting or not
        //     observation.target.classList.toggle('--in-view', observation.isIntersecting)
        //   }
        (entries) => {
          console.log(entries)
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = slidesArray.indexOf(entry.target)
              setCurrentSlideIndex(index)
              console.log(entry, currentSlideIndex)
            }
          })
        },
        {
          root: sliderScroller,
          threshold: 0.6,
        },
      )
      console.log(observer)

      slides.forEach((slide) => observer.unobserve(slide))
    }, [])

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
            />
            <IconButton
              svg={ChevronRightIcon}
              label="Volgende"
              onBackground="dark"
              className="ams-image-slider__control ams-image-slider__control--next"
            />
          </div>
        )}
        <ImageSliderScroller ref={targetRef}>{children}</ImageSliderScroller>
      </div>
    )
  },
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
