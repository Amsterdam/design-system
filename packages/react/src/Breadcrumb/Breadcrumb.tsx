import React, { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

interface BreadcrumbComponent
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLElement>> & React.RefAttributes<HTMLElement>
  > {
  Item: typeof BreadcrumbItem
}

export const Breadcrumb = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>, ref: ForwardedRef<HTMLElement>) => {
    return (
      <nav {...restProps} className="amsterdam-breadcrumb" ref={ref}>
        <ol className="amsterdam-breadcrumb__list">{children}</ol>
      </nav>
    )
  },
) as BreadcrumbComponent

Breadcrumb.displayName = 'Breadcrumb'

export interface BreadcrumbItemProps extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  href: string
}

const BreadcrumbItem = forwardRef(
  ({ children, href, ...restProps }: BreadcrumbItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li {...restProps} className="amsterdam-breadcrumb-item" ref={ref}>
        <a className="amsterdam-breadcrumb-item__link" href={href}>
          {children}
        </a>
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumb.Item = BreadcrumbItem
