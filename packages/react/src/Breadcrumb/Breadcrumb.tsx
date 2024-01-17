/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { BreadcrumbItem } from './BreadcrumbItem'

export type BreadcrumbProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

interface BreadcrumbComponent extends ForwardRefExoticComponent<BreadcrumbProps & RefAttributes<HTMLElement>> {
  Item: typeof BreadcrumbItem
}

export const Breadcrumb = forwardRef(
  ({ children, className, ...restProps }: BreadcrumbProps, ref: ForwardedRef<HTMLElement>) => {
    return (
      <nav {...restProps} className={clsx('amsterdam-breadcrumb', className)} ref={ref}>
        <ol className="amsterdam-breadcrumb__list">{children}</ol>
      </nav>
    )
  },
) as BreadcrumbComponent

Breadcrumb.displayName = 'Breadcrumb'

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Item.displayName = 'Breadcrumb.Item'
