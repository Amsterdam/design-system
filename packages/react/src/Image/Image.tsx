/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ImgHTMLAttributes } from 'react'
import { AspectRatioProps } from '../common/aspectRatio'

export type ImageProps = AspectRatioProps & ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef(
  ({ aspectRatio = 'wide', className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      ref={ref}
      className={clsx('ams-image', aspectRatio && `ams-aspect-ratio--${aspectRatio}`, className)}
    />
  ),
)

Image.displayName = 'Image'
