/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

type BreadcrumbProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

interface BreadcrumbComponent extends ForwardRefExoticComponent<BreadcrumbProps & RefAttributes<HTMLElement>> {
  Item: typeof BreadcrumbItem
}

export const Breadcrumb = forwardRef(({ children, ...restProps }: BreadcrumbProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <nav {...restProps} className="amsterdam-breadcrumb" ref={ref}>
      <ol className="amsterdam-breadcrumb__list">{children}</ol>
    </nav>
  )
}) as BreadcrumbComponent

Breadcrumb.displayName = 'Breadcrumb'

export interface BreadcrumbItemProps extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  href: string
}

const BreadcrumbItem = forwardRef(
  ({ children, href, ...restProps }: BreadcrumbItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li {...restProps} className="amsterdam-breadcrumb__item" ref={ref}>
        <a className="amsterdam-breadcrumb__link" href={href}>
          {children}
        </a>
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumb.Item = BreadcrumbItem
