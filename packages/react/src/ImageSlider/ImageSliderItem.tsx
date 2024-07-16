/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ImageSliderItemProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderItem = forwardRef(
  ({ children, className, ...restProps }: ImageSliderItemProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-image-slider__item', className)}>
      {children}
    </div>
  ),
)

ImageSliderItem.displayName = 'ImageSlider.Item'
