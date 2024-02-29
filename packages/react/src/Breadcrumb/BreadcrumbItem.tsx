/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type BreadcrumbItemProps = {
  href: string
} & PropsWithChildren<HTMLAttributes<HTMLLIElement>>

export const BreadcrumbItem = forwardRef(
  ({ children, className, href, ...restProps }: BreadcrumbItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} className={clsx('amsterdam-breadcrumb__item', className)} ref={ref}>
      <a className="amsterdam-breadcrumb__link" href={href}>
        {children}
      </a>
    </li>
  ),
)

BreadcrumbItem.displayName = 'BreadcrumbItem'
