/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /*
   * The layout to apply to the page.
   * The default just stacks its children vertically and centers itself in the window.
   * The application layout requires specific child components.
   */
  layout?: 'application'
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}
 */
export const Page = forwardRef(
  ({ children, className, layout, ...restProps }: PageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page', layout && `ams-page--${layout}`, className)} ref={ref}>
      {children}
    </div>
  ),
)

Page.displayName = 'Page'
