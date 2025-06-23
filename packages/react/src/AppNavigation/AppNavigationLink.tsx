/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import React, { Children, isValidElement, useState } from 'react'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationMenuLinkProps = {
  active?: boolean
  icon?: IconProps['svg']
  label: string
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const AppNavigationMenuLink = forwardRef(
  (
    { active, children, className, icon, label, ...restProps }: AppNavigationMenuLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [submenuOpen, setSubmenuOpen] = useState(false)

    // Check if children contain an element with type 'AppNavigation.Menu'
    const hasSubMenu = Children.toArray(children).some(
      (child) => isValidElement(child) && (child.type as any)?.displayName === 'AppNavigation.Menu',
    )

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (hasSubMenu) {
        e.preventDefault()
        setSubmenuOpen((open) => !open)
      }
    }

    return (
      <li className={clsx('ams-app-navigation__menu-item', submenuOpen && 'ams-app-navigation__menu-item--open')}>
        <a
          {...restProps}
          aria-expanded={hasSubMenu ? submenuOpen : undefined}
          className={clsx(
            'ams-app-navigation__menu-link',
            active && 'ams-app-navigation__menu-link--active',
            className,
          )}
          onClick={handleClick}
          ref={ref}
        >
          {icon && <Icon size="large" svg={icon} />}
          <span className="ams-app-navigation_menu-link-label">{label}</span>
          {hasSubMenu && <Icon size="small" svg={ChevronDownIcon} />}
        </a>
        {children}
      </li>
    )
  },
)

AppNavigationMenuLink.displayName = 'AppNavigation.MenuLink'
