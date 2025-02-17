/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type FooterMenuLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const FooterMenuLink = forwardRef(
  ({ children, className, ...restProps }: FooterMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li>
      <a {...restProps} className={clsx('ams-footer__menu-link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

FooterMenuLink.displayName = 'Footer.MenuLink'
