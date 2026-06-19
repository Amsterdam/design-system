/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type MenuLinkProps = {
  /** The icon to display for the menu icon. Use the filled variant. */
  readonly icon: IconProps['svg']
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A navigation link within a Menu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const MenuLink = forwardRef(
  ({ children, className, icon, linkComponent, ...restProps }: MenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const Tag = linkComponent || 'a'

    return (
      <li>
        <Tag
          {...restProps}
          className={clsx('ams-menu__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          <Icon className="ams-menu__icon" svg={icon} />
          {children}
        </Tag>
      </li>
    )
  },
)

MenuLink.displayName = 'Menu.Link'
