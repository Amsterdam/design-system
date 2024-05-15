/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type BreadcrumbLinkProps = {
  href: string
} & PropsWithChildren<HTMLAttributes<HTMLLIElement>>

export const BreadcrumbLink = forwardRef(
  ({ children, className, href, ...restProps }: BreadcrumbLinkProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} className={clsx('ams-breadcrumb__item', className)} ref={ref}>
      <a className="ams-breadcrumb__link" href={href}>
        {children}
      </a>
    </li>
  ),
)

BreadcrumbLink.displayName = 'Breadcrumb.Link'
