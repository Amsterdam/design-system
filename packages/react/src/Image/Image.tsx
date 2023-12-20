/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  cover?: Boolean
}

export const Image = forwardRef(
  ({ className, cover = false, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img {...restProps} ref={ref} className={clsx('amsterdam-image', cover && 'amsterdam-image--cover', className)} />
  ),
)

Image.displayName = 'Image'
