/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = forwardRef(({ className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
  <img {...restProps} ref={ref} className={clsx('amsterdam-image', className)} />
))

Image.displayName = 'Image'
