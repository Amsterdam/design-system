/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef } from 'react'
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
    // const [ currentSlide, setCurrentSlide ] = useState(0)
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
          }
        },
        {
          root: sliderScroller,
          threshold: 0.6,
        },
      )

      for (let slide of slidesArray) observer.observe(slide)
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
