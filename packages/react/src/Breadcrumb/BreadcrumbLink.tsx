/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type BreadcrumbLinkProps = {
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * One step in the breadcrumb trail, linking to a page in the hierarchy.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-breadcrumb--docs Breadcrumb docs at Amsterdam Design System}
 */
export const BreadcrumbLink = forwardRef(
  ({ children, className, linkComponent, ...restProps }: BreadcrumbLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const Tag = linkComponent || 'a'

    return (
      <li className="ams-breadcrumb__item">
        <Tag
          {...restProps}
          className={clsx('ams-breadcrumb__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {children}
        </Tag>
      </li>
    )
  },
)

BreadcrumbLink.displayName = 'Breadcrumb.Link'
