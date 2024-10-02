/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderItemProps = {
  /** this ID needs to match the key or order of the slides (starting with 0) */
  slideId: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderItem = forwardRef(
  ({ children, slideId, className, ...restProps }: ImageSliderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { currentSlideId } = useContext(ImageSliderContext)
    const isInView = currentSlideId === slideId

    return (
      <div
        {...restProps}
        ref={ref}
        className={clsx('ams-image-slider__item', isInView && 'ams-image-slider__item--in-view', className)}
        {...(!isInView && { inert: '' })}
      >
        {children}
      </div>
    )
  },
)

ImageSliderItem.displayName = 'ImageSlider.Item'
