/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AppNavigationMenuLink } from './AppNavigationLink'

export type AppNavigationProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-app-navigation--docs AppNavigation docs at Amsterdam Design System}
 */
export const AppNavigationRoot = forwardRef(
  ({ children, className, ...restProps }: AppNavigationProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} className={clsx('ams-app-navigation', className)} ref={ref}>
      <ul className="ams-app-navigation__menu">{children}</ul>
    </nav>
  ),
)

AppNavigationRoot.displayName = 'AppNavigation'

export const AppNavigation = Object.assign(AppNavigationRoot, {
  Link: AppNavigationMenuLink,
})
