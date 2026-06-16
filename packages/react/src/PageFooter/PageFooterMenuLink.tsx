/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageFooterMenuLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link within the Page Footer menu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs Page Footer docs at Amsterdam Design System}
 */
export const PageFooterMenuLink = forwardRef(
  ({ children, className, ...restProps }: PageFooterMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className="ams-page-footer__menu-item">
      <a {...restProps} className={clsx('ams-page-footer__menu-link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

PageFooterMenuLink.displayName = 'PageFooter.MenuLink'
