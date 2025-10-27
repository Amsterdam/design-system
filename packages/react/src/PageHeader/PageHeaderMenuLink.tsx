/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageHeaderMenuLinkProps = {
  fixed?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

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
