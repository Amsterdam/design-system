/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { ImageProps } from '../Image/Image'

import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'
import { Image } from '../Image/Image'

export type CardImageProps = {
  /** How the image fills the area. Contain shows all of it, cover crops it to the edges. */
  readonly objectFit?: 'contain' | 'cover'
} & Readonly<ImageProps>

/**
 * The image associated with a Card.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardImage = forwardRef(
  ({ aspectRatio, className, objectFit, ...restProps }: CardImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <div
      className={clsx(
        'ams-card__image',
        objectFit === 'cover' && 'ams-card__image--cover',
        generateAspectRatioClass(aspectRatio),
        className,
      )}
    >
      <Image {...restProps} ref={ref} />
    </div>
  ),
)

CardImage.displayName = 'Card.Image'
