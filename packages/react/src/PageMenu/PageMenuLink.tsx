/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export type PageMenuLinkProps = {
  icon?: Function
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const PageMenuLink = forwardRef(
  ({ children, className, icon, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li>
      <a {...restProps} ref={ref} className={clsx('ams-page-menu__link', className)}>
        {children}
        {icon && <Icon svg={icon} size="level-6" />}
      </a>
    </li>
  ),
)

PageMenuLink.displayName = 'PageMenu.Link'
