/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderItemProps = {
  /** The identifier of the item. Must match the key or order of the slides (starting at 0). */
  slideId: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderItem = forwardRef(
  ({ children, slideId, className, ...restProps }: ImageSliderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { currentSlideId } = useContext(ImageSliderContext)
    const isInView = currentSlideId === slideId

    return (
      <div
        {...restProps}
        className={clsx('ams-image-slider__item', isInView && 'ams-image-slider__item--in-view', className)}
        ref={ref}
        {...(!isInView && { inert: '' })}
      >
        {children}
      </div>
    )
  },
)

ImageSliderItem.displayName = 'ImageSlider.Item'
