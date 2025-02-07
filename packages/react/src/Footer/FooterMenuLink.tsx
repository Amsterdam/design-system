/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export type FooterMenuLinkProps = {
  icon?: Function
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const FooterMenuLink = forwardRef(
  ({ children, className, icon, ...restProps }: FooterMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li>
      <a {...restProps} className={clsx('ams-footer__menu-link', className)} ref={ref}>
        {children}
        {icon && <Icon size="level-6" svg={icon} />}
      </a>
    </li>
  ),
)

FooterMenuLink.displayName = 'Footter.MenuLink'
