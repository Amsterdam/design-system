/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type BreadcrumbLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * One step in the breadcrumb trail, linking to a page in the hierarchy.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-breadcrumb--docs Breadcrumb docs at Amsterdam Design System}
 */
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
