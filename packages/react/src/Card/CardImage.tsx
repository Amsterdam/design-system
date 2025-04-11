/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { Image } from '../Image'
import type { ImageProps } from '../Image'

export const CardImage = forwardRef(
  ({ children, className, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <Image {...restProps} className={clsx('ams-card__image', className)} ref={ref}>
      {children}
    </Image>
  ),
)

CardImage.displayName = 'Card.Image'
