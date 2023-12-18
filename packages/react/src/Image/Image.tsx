/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: 'cover' | 'contain'
}

export const Image = forwardRef(
  ({ className, objectFit, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img {...restProps} ref={ref} className={clsx('amsterdam-image', className)} style={{ objectFit }} />
  ),
)

Image.displayName = 'Image'
