/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageProps = {
  /*
   * Whether the page contains a Menu component.
   * This requires the following class names on the appropriate children:
   *   - `ams-page__area--skip-link`
   *   - `ams-page__area--header`
   *   - `ams-page__area--menu`
   *   - `ams-page__area--body`
   *   - `ams-page__area--footer`
   */
  withMenu?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}
 */
export const Page = forwardRef(
  ({ children, className, withMenu, ...restProps }: PageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page', withMenu && 'ams-page--with-menu', className)} ref={ref}>
      {children}
    </div>
  ),
)

Page.displayName = 'Page'
