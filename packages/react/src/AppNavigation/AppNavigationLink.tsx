/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationMenuLinkProps = {
  icon: IconProps['svg']
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const AppNavigationMenuLink = forwardRef(
  ({ children, className, icon, ...restProps }: AppNavigationMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx('ams-app-navigation__menu-item')}>
      <a {...restProps} className={clsx('ams-app-navigation__menu-link', className)} ref={ref}>
        {icon && <Icon size="large" svg={icon} />}
        {children}
      </a>
    </li>
  ),
)

AppNavigationMenuLink.displayName = 'AppNavigation.MenuLink'
