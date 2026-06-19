/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageFooterMenuLinkProps = {
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to intrinsic elements, not to custom components.
   */
  readonly linkComponent?: ElementType
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link within the Page Footer menu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs Page Footer docs at Amsterdam Design System}
 */
export const PageFooterMenuLink = forwardRef(
  (
    { children, className, linkComponent, ...restProps }: PageFooterMenuLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <li className="ams-page-footer__menu-item">
        <Tag
          {...restProps}
          className={clsx('ams-page-footer__menu-link', className)}
          {...((!linkComponent || typeof linkComponent === 'string') && { ref })}
        >
          {children}
        </Tag>
      </li>
    )
  },
)

PageFooterMenuLink.displayName = 'PageFooter.MenuLink'
