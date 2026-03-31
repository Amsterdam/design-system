/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TabNavigationLinkProps = {
  /** The React component to use for the link. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const TabNavigationLink = forwardRef(
  (
    { children, className, linkComponent, ...restProps }: TabNavigationLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Link = linkComponent || 'a'

    return (
      <li className="ams-tab-navigation__item">
        <Link {...restProps} className={clsx('ams-tab-navigation__link', className)} ref={ref}>
          <span aria-hidden="true" className="ams-tab-navigation__link-label-hidden" hidden>
            {children}
          </span>
          <span className="ams-tab-navigation__link-label">{children}</span>
        </Link>
      </li>
    )
  },
)

TabNavigationLink.displayName = 'TabNavigation.Link'
