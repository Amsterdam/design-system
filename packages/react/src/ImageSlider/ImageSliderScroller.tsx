/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ImageSliderScrollerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderScroller = forwardRef(
  ({ children, className, ...restProps }: ImageSliderScrollerProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-image-slider__scroller', className)} ref={ref}>
      {children}
    </div>
  ),
)

ImageSliderScroller.displayName = 'ImageSlider.Scroller'
