/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AppNavigationMenuLink } from './AppNavigationLink'
import { AppNavigationMenu } from './AppNavigationMenu'

export type AppNavigationProps = {
  expanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-app-navigation--docs AppNavigation docs at Amsterdam Design System}
 */
export const AppNavigationRoot = forwardRef(
  ({ children, className, expanded, ...restProps }: AppNavigationProps, ref: ForwardedRef<HTMLElement>) => (
    <nav
      {...restProps}
      className={clsx('ams-app-navigation', expanded && 'ams-app-navigation--expanded', className)}
      ref={ref}
    >
      <ol className="ams-app-navigation__menu">{children}</ol>
    </nav>
  ),
)

AppNavigationRoot.displayName = 'AppNavigation'

export const AppNavigation = Object.assign(AppNavigationRoot, {
  Link: AppNavigationMenuLink,
  Menu: AppNavigationMenu,
})
