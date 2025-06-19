/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageProps = {
  /* Whether the page is used for an application. This changes the layout. */
  purpose?: 'application'
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}
 */
export const Page = forwardRef(
  ({ children, className, purpose, ...restProps }: PageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      className={clsx('ams-page', purpose === 'application' && 'ams-page--application', className)}
      ref={ref}
    >
      {children}
    </div>
  ),
)

Page.displayName = 'Page'
