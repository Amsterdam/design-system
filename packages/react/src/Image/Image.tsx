/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ImgHTMLAttributes } from 'react'

export type ImageProps = {
  cover?: Boolean
} & ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef(
  ({ className, cover = false, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img {...restProps} ref={ref} className={clsx('amsterdam-image', cover && 'amsterdam-image--cover', className)} />
  ),
)

Image.displayName = 'Image'
