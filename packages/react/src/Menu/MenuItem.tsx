/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Children, forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type MenuItemProps = {
  /** The icon to display for the menu item. Use the filled variant for top-level items. */
  readonly icon?: IconProps['svg']
  /** The text or inline content for the link. */
  readonly label: ReactNode
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
