/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AppNavigationMenuButton } from './AppNavigationButton'
import { AppNavigationMenuLink } from './AppNavigationLink'
import { AppNavigationMenu } from './AppNavigationMenu'
import { IconButton } from '../IconButton'

export type AppNavigationProps = {
  expandable?: boolean
  expanded?: boolean
  onToggle?: () => void
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-app-navigation--docs AppNavigation docs at Amsterdam Design System}
 */
export const AppNavigationRoot = forwardRef(
  (
    { children, className, expandable, expanded, onToggle, ...restProps }: AppNavigationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <nav
      {...restProps}
      className={clsx('ams-app-navigation', expanded && 'ams-app-navigation--expanded', className)}
      ref={ref}
    >
      {expandable && (
        <IconButton
          className="ams-app-navigation__toggle"
          color="inverse"
          label="Toggle navigation"
          onClick={onToggle}
          size="large"
          svg={ChevronForwardIcon}
        />
      )}
      <ol className="ams-app-navigation__menu">{children}</ol>
    </nav>
  ),
)

AppNavigationRoot.displayName = 'AppNavigation'

export const AppNavigation = Object.assign(AppNavigationRoot, {
  Button: AppNavigationMenuButton,
  Link: AppNavigationMenuLink,
  Menu: AppNavigationMenu,
})
