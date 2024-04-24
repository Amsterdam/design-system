/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageHeadingProps = {
  /** Changes the text color for readability on a dark background. */
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export const PageHeading = forwardRef(
  ({ children, className, inverseColor, ...restProps }: PageHeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h1
      {...restProps}
      ref={ref}
      className={clsx('ams-page-heading', inverseColor && 'ams-page-heading--inverse-color', className)}
    >
      {children}
    </h1>
  ),
)

PageHeading.displayName = 'PageHeading'
