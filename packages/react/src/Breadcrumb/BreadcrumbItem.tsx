/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface BreadcrumbItemProps extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  href: string
}

export const BreadcrumbItem = forwardRef(
  ({ children, className, href, ...restProps }: BreadcrumbItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li {...restProps} className={clsx('amsterdam-breadcrumb__item', className)} ref={ref}>
        <a className="amsterdam-breadcrumb__link" href={href}>
          {children}
        </a>
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'BreadcrumbItem'
