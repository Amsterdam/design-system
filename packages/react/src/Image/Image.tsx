/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, ImgHTMLAttributes } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import { AspectRatioProps } from '../common/types'
import { generateAspectRatioClass } from './generateAspectRatioClass'

export type ImageProps = AspectRatioProps &
  Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'> & {
    /** A textual description of the content of the image. */
    alt: string
  }

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
