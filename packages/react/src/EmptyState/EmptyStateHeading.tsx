/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import { Heading } from '../Heading'

export const EmptyStateHeading = forwardRef(
  ({ children, className, ...restProps }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <Heading {...restProps} className={clsx('ams-empty-state__heading', className)} ref={ref}>
      {children}
    </Heading>
  ),
)

EmptyStateHeading.displayName = 'EmptyState.Heading'
