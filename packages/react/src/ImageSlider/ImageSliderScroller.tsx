/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ImageSliderScrollerProps = {
  currentSlide: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderScroller = forwardRef(
  ({ children, className, ...restProps }: ImageSliderScrollerProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-image-slider__scroller', className)}>
      {children}
    </div>
  ),
)

ImageSliderScroller.displayName = 'ImageSlider.Scroller'
