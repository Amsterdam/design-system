/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ImageSliderScrollerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderScroller = forwardRef(
  ({ children, className, ...restProps }: ImageSliderScrollerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div {...restProps} className={clsx('ams-image-slider__scroller', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ImageSliderScroller.displayName = 'ImageSlider.Scroller'
