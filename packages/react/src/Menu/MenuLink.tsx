/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren, ReactNode } from 'react'
import { Icon } from '../Icon'

export type MenuLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
  /** An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list. */
  icon: Function | ReactNode
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const MenuLink = forwardRef(
  ({ children, className, color, icon, ...restProps }: MenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <li>
        <a {...restProps} className={clsx('ams-menu__link', color && `ams-menu__link--${color}`, className)} ref={ref}>
          <Icon className="ams-menu__icon" svg={icon} />
          {children}
        </a>
      </li>
    )
  },
)

MenuLink.displayName = 'Menu.Link'
