/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { Children, isValidElement, useState } from 'react'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationMenuButtonProps = {
  active?: boolean
  icon?: IconProps['svg']
  label: string
  open?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const AppNavigationMenuButton = forwardRef(
  (
    { active, children, className, icon, label, open = false, ...restProps }: AppNavigationMenuButtonProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [submenuOpen, setSubmenuOpen] = useState(open)

    // Check if children contain an element with type 'AppNavigation.Menu'
    const hasSubMenu = Children.toArray(children).some(
      (child) => isValidElement(child) && (child.type as any)?.displayName === 'AppNavigation.Menu',
    )

    return (
      <li className={clsx('ams-app-navigation__menu-item', submenuOpen && 'ams-app-navigation__menu-item--open')}>
        <a
          {...restProps}
          aria-expanded={hasSubMenu ? submenuOpen : undefined}
          className={clsx(
            'ams-app-navigation__menu-button',
            active && 'ams-app-navigation__menu-button--active',
            className,
          )}
          onClick={() => setSubmenuOpen(!submenuOpen)}
          ref={ref}
        >
          {icon && <Icon size="large" svg={icon} />}
          <span className="ams-app-navigation_menu-button-label">{label}</span>
          {hasSubMenu && <Icon className="ams-app-navigation__menu-link-chevron" size="small" svg={ChevronDownIcon} />}
        </a>
        {children}
      </li>
    )
  },
)

AppNavigationMenuButton.displayName = 'AppNavigation.MenuButton'
