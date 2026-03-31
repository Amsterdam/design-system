/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type TabNavigationLinkProps = {
  /** An icon to display before the link text. */
  icon?: IconProps['svg']
  /** The React component to use for the link. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const TabNavigationLink = forwardRef(
  (
    { children, className, icon, linkComponent, ...restProps }: TabNavigationLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Link = linkComponent || 'a'

    return (
      <li className="ams-tab-navigation__item">
        <Link {...restProps} className={clsx('ams-tab-navigation__link', className)} ref={ref}>
          {icon && <Icon svg={icon} />}
          <span className="ams-tab-navigation__link-label-wrapper">
            <span aria-hidden="true" className="ams-tab-navigation__link-label-hidden" hidden>
              {children}
            </span>
            <span className="ams-tab-navigation__link-label">{children}</span>
          </span>
        </Link>
      </li>
    )
  },
)

TabNavigationLink.displayName = 'TabNavigation.Link'
