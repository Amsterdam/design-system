/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, ImgHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { AspectRatioProps } from '../common/types'

import { generateAspectRatioClass } from './generateAspectRatioClass'

export const objectFitOptions = ['cover', 'contain'] as const
type ObjectFit = (typeof objectFitOptions)[number]

export type ImageProps = {
  /** A textual description of the content of the image. */
  readonly alt: string
  /**
   * How the image fills its box. Cover crops to fill it; contain keeps the whole image visible.
   * @default cover
   */
  readonly objectFit?: ObjectFit
} & Readonly<AspectRatioProps> &
  Readonly<Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'>>

/**
 * Displays an image.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image--docs Image docs at Amsterdam Design System}
 */
export const Image = forwardRef(
  ({ aspectRatio, className, objectFit, width, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      className={clsx(
        'ams-image',
        objectFit === 'contain' && 'ams-image--contain',
        generateAspectRatioClass(aspectRatio),
        className,
      )}
      ref={ref}
      width={width ?? 600} // Fixed width for when CSS does not load. Gets overridden by CSS.
    />
  ),
)

Image.displayName = 'Image'
