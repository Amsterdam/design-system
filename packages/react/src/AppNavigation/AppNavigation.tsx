/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AppNavigationButton } from './AppNavigationButton'
import { AppNavigationLink } from './AppNavigationLink'
import { AppNavigationMenu } from './AppNavigationMenu'
import { useAppContext } from '../App/AppContext'

export type AppNavigationProps = {
  expanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-app-navigation--docs AppNavigation docs at Amsterdam Design System}
 */
export const AppNavigationRoot = forwardRef(
  ({ children, className, expanded, ...restProps }: AppNavigationProps, ref: ForwardedRef<HTMLElement>) => {
    const { appNavigationOpen } = useAppContext()

    return (
      <nav
        {...restProps}
        className={clsx(
          'ams-app-navigation',
          appNavigationOpen && 'ams-app-navigation--open',
          expanded && 'ams-app-navigation--expanded',
          className,
        )}
        ref={ref}
      >
        <ol className="ams-app-navigation__menu">{children}</ol>
      </nav>
    )
  },
)

AppNavigationRoot.displayName = 'AppNavigation'

export const AppNavigation = Object.assign(AppNavigationRoot, {
  Button: AppNavigationButton,
  Link: AppNavigationLink,
  Menu: AppNavigationMenu,
})
