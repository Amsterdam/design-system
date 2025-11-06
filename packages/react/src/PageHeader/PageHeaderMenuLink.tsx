/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type PageHeaderMenuLinkProps = {
  /** Whether the link appears in the Page Header on narrow windows. */
  fixed?: boolean
  /** An icon to display at the end of the label. */
  icon?: IconProps['svg']
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const PageHeaderMenuLink = forwardRef(
  (
    { children, className, fixed, icon, ...restProps }: PageHeaderMenuLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <li className={clsx('ams-page-header__menu-item', fixed && 'ams-page-header__menu-item--fixed')}>
      <a {...restProps} className={clsx('ams-page-header__menu-link', className)} ref={ref}>
        {children}
        {icon && <Icon svg={icon} />}
      </a>
    </li>
  ),
)

PageHeaderMenuLink.displayName = 'PageHeader.MenuLink'
