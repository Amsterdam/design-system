/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { BreadcrumbItem } from './BreadcrumbItem'

export type BreadcrumbProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

type BreadcrumbComponent = {
  Item: typeof BreadcrumbItem
} & ForwardRefExoticComponent<BreadcrumbProps & RefAttributes<HTMLElement>>

export const Breadcrumb = forwardRef(
  ({ children, className, ...restProps }: BreadcrumbProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} className={clsx('ams-breadcrumb', className)} ref={ref}>
      <ol className="ams-breadcrumb__list">{children}</ol>
    </nav>
  ),
) as BreadcrumbComponent

Breadcrumb.displayName = 'Breadcrumb'

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Item.displayName = 'Breadcrumb.Item'
