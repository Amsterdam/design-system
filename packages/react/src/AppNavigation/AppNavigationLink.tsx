/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationLinkProps = {
  active?: boolean
  icon?: IconProps['svg']
  label: string
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const AppNavigationLink = forwardRef(
  (
    { active, children, className, icon, label, ...restProps }: AppNavigationLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li className="ams-app-navigation__menu-item">
        <a
          {...restProps}
          aria-current={active ? 'page' : undefined}
          className={clsx('ams-app-navigation__link', className)}
          ref={ref}
        >
          {icon && <Icon size="large" svg={icon} />}
          <span className="ams-app-navigation__label">{label}</span>
        </a>
        {children}
      </li>
    )
  },
)

AppNavigationLink.displayName = 'AppNavigation.Link'
