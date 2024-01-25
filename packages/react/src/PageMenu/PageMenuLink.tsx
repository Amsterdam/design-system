/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export interface PageMenuLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  icon?: Function
}

export const PageMenuLink = forwardRef(
  ({ children, className, icon, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li>
      <a {...restProps} ref={ref} className={clsx('amsterdam-page-menu__link', className)}>
        {children}
        {icon && <Icon svg={icon} size="level-6" />}
      </a>
    </li>
  ),
)

PageMenuLink.displayName = 'PageMenuLink'
