/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import { Heading } from '../Heading'

export const CardHeading = forwardRef(
  ({ children, className, size = 'level-4', ...restProps }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <Heading {...restProps} className={clsx('ams-card__heading', className)} ref={ref} size={size}>
      {children}
    </Heading>
  ),
)

CardHeading.displayName = 'Card.Heading'
