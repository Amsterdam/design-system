/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Heading, HeadingProps } from '../Heading'

export type CardHeadingProps = Partial<HeadingProps> & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export const CardHeading = forwardRef(
  (
    { children, className, level = 1, size = 'level-4', ...restProps }: CardHeadingProps,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => (
    <Heading {...restProps} className={clsx('ams-card__heading', className)} level={level} ref={ref} size={size}>
      {children}
    </Heading>
  ),
)

CardHeading.displayName = 'Card.Heading'
