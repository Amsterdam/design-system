/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

export type BreadcrumbLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const BreadcrumbLink = forwardRef(
  ({ children, className, ...restProps }: BreadcrumbLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className="ams-breadcrumb__item">
      <a {...restProps} className={clsx('ams-breadcrumb__link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

BreadcrumbLink.displayName = 'Breadcrumb.Link'
