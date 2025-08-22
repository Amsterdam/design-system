/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export type PageHeaderMenuLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  fixed?: boolean
}

export const PageHeaderMenuLink = forwardRef(
  ({ children, className, fixed, ...restProps }: PageHeaderMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx('ams-page-header__menu-item', fixed && 'ams-page-header__menu-item--fixed')}>
      <a {...restProps} className={clsx('ams-page-header__menu-link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

PageHeaderMenuLink.displayName = 'PageHeader.MenuLink'
