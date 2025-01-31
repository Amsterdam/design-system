/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageHeadingProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export const PageHeading = forwardRef(
  ({ children, className, color, ...restProps }: PageHeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h1
      {...restProps}
      className={clsx('ams-page-heading', color && `ams-page-heading--${color}-color`, className)}
      ref={ref}
    >
      {children}
    </h1>
  ),
)

PageHeading.displayName = 'PageHeading'
