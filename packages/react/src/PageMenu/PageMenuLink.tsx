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
      <a {...restProps} className={clsx('ams-page-menu__link', className)} ref={ref}>
        {children}
        {icon && <Icon size="small" svg={icon} />}
      </a>
    </li>
  ),
)

PageMenuLink.displayName = 'PageMenu.Link'
