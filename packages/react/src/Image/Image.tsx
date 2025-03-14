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
   * A textual description of the content of the image.
   */
  alt: string
} & AspectRatioProps &
  ImgHTMLAttributes<HTMLImageElement>

export const generateAspectRatioClass = (aspectRatio?: string) =>
  aspectRatio && `ams-aspect-ratio--${aspectRatio.replace(':', '-')}`

export const Image = forwardRef(
  ({ aspectRatio, className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img {...restProps} className={clsx('ams-image', generateAspectRatioClass(aspectRatio), className)} ref={ref} />
  ),
)

Image.displayName = 'Image'
