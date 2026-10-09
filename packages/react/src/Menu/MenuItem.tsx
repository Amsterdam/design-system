/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { Children, forwardRef, useContext, useEffect } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'
import { MenuContext } from './MenuContext'

export type MenuItemProps = {
  /** The icon to display for the menu item. Use the filled variant for top-level items. */
  readonly icon?: IconProps['svg']
  /** The text for the link. */
  readonly label: string
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A menu item that can contain a nested submenu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const MenuItem = forwardRef(
  (
    { children, className, icon, label, linkComponent, ...restProps }: MenuItemProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'
    const submenuChildren = Children.toArray(children)
    const hasSubmenu = submenuChildren.length > 0
    const { hidesSubmenu } = useContext(MenuContext)

    // A wide Menu shows a submenu only while it is expanded, so without `expandable` these links cannot be reached.
    useEffect(() => {
      if (hasSubmenu && hidesSubmenu) {
        console.warn(
          'A Menu Item has a submenu, but its Menu cannot be expanded, so the submenu stays hidden in a wide window. Set `expandable` on the Menu with `inWideWindow`.',
        )
      }
    }, [hasSubmenu, hidesSubmenu])

    return (
      <li className="ams-menu__item">
        <Tag
          {...restProps}
          className={clsx('ams-menu__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {icon && <Icon className="ams-menu__icon" svg={icon} />}
          {label}
        </Tag>
        {hasSubmenu && <ul className="ams-menu__submenu">{submenuChildren}</ul>}
      </li>
    )
  },
)

MenuItem.displayName = 'Menu.Item'
