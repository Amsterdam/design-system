/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageProps = {
  /*
   * The layout to apply to the page.
   * The default just stacks its children vertically and centers itself in the window.
   * When `hasMenu` is true, the application layout requires specific child components.
   * Required children (by class name):
   *   - ams-page__area--skip-link
   *   - ams-page__area--menu
   *   - ams-page__area--header
   *   - ams-page__area--body
   *   - ams-page__area--footer
   */
  hasMenu?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}
 */
export const Page = forwardRef(
  ({ children, className, hasMenu, ...restProps }: PageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page', hasMenu && 'ams-page--has-menu', className)} ref={ref}>
      {children}
    </div>
  ),
)

Page.displayName = 'Page'
