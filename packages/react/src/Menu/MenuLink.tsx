/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type MenuLinkProps = {
  /** The icon to display for the menu icon. Use the filled variant. */
  readonly icon: IconProps['svg']
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A navigation link within a Menu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const MenuLink = forwardRef(
  ({ children, className, icon, ...restProps }: MenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <li>
        <a {...restProps} className={clsx('ams-menu__link', className)} ref={ref}>
          <Icon className="ams-menu__icon" svg={icon} />
          {children}
        </a>
      </li>
    )
  },
)

MenuLink.displayName = 'Menu.Link'
