/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import type { ImageProps } from '../Image'

import { Image } from '../Image'

export const CardImage = forwardRef(({ className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
  <Image {...restProps} className={clsx('ams-card__image', className)} ref={ref} />
))

CardImage.displayName = 'Card.Image'
