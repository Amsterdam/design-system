/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ImgHTMLAttributes } from 'react'
import { AspectRatioProps } from '../AspectRatio'

export type ImageProps = AspectRatioProps & {
  /** Whether to display the image exactly as large as its container. This will clip the image if necessary. */
  cover?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef(
  ({ className, cover = false, aspectRatio, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-image',
        cover && 'ams-image--cover',
        aspectRatio && `ams-aspect-ratio ams-aspect-ratio--${aspectRatio}`,
        className,
      )}
    />
  ),
)

Image.displayName = 'Image'
