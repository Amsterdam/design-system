/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { ImageProps } from '../Image'

import { Image } from '../Image'

/**
 * The image associated with a Card.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardImage = forwardRef(({ className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
  <div className={clsx('ams-card__image', className)}>
    <Image {...restProps} ref={ref} />
  </div>
))

CardImage.displayName = 'Card.Image'
