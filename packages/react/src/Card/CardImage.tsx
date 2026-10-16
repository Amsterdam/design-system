/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { ImageProps } from '../Image/Image'

import { Image } from '../Image/Image'

export type CardImageProps = ImageProps

/**
 * The image associated with a Card.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardImage = forwardRef(
  ({ className, ...restProps }: CardImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <Image {...restProps} className={clsx('ams-card__image', className)} ref={ref} />
  ),
)

CardImage.displayName = 'Card.Image'
