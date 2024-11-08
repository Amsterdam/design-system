/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ImgHTMLAttributes } from 'react'
import { AspectRatioProps } from '../common/types'

export type ImageProps = {
  /**
   * Describes the image to blind or visually impaired users.
   * Also displayed if the image is not (yet) loaded.
   */
  alt: string
} & AspectRatioProps &
  ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef(
  ({ aspectRatio, className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      ref={ref}
      className={clsx('ams-image', aspectRatio && `ams-aspect-ratio--${aspectRatio}`, className)}
    />
  ),
)

Image.displayName = 'Image'
