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
  icon: IconProps['svg']
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

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
