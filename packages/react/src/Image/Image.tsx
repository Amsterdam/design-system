/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ImgHTMLAttributes } from 'react'
import { generateAspectRatioClass } from './generateAspectRatioClass'
import { AspectRatioProps } from '../common/types'

export type ImageProps = {
  /** A textual description of the content of the image. */
  alt: string
} & AspectRatioProps &
  Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image--docs Image docs at Amsterdam Design System}
 */
export const Image = forwardRef(
  ({ aspectRatio, className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      className={clsx('ams-image', generateAspectRatioClass(aspectRatio), className)}
      ref={ref}
      width={600} // Fixed width for when CSS does not load. Gets overridden by CSS.
    />
  ),
)

Image.displayName = 'Image'
