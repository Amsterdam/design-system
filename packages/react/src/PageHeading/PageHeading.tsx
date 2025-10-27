/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageHeadingProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

/**
 * @deprecated We no longer use this size of headings. Use `Heading` with level 1 instead.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-page-heading--docs Page Heading docs at Amsterdam Design System}
 */
export const PageHeading = forwardRef(
  ({ children, className, color, ...restProps }: PageHeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h1 {...restProps} className={clsx('ams-page-heading', color && `ams-page-heading--${color}`, className)} ref={ref}>
      {children}
    </h1>
  ),
)

PageHeading.displayName = 'PageHeading'
