/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import type { PageMenuItemProps } from './PageMenu'

export type PageMenuLinkProps = {
  icon?: Function
} & PageMenuItemProps &
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const PageMenuLink = forwardRef(
  ({ children, className, icon, rank, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx(rank === 'secondary' && 'ams-page-menu__item--secondary')}>
      <a {...restProps} ref={ref} className={clsx('ams-page-menu__link', className)}>
        {children}
        {icon && <Icon svg={icon} size="level-6" />}
      </a>
    </li>
  ),
)

PageMenuLink.displayName = 'PageMenu.Link'
