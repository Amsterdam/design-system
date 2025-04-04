/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Image, ImageProps } from '../Image'

export type CardImageProps = ImageProps & PropsWithChildren<HTMLAttributes<HTMLImageElement>>

export const CardImage = forwardRef(
  ({ children, className, ...restProps }: CardImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <Image {...restProps} className={clsx('ams-card__image', className)} ref={ref}>
      {children}
    </Image>
  ),
)

CardImage.displayName = 'Card.Image'
