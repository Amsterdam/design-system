/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type TabNavigationLinkProps = {
  /** An icon to display before the link text. */
  readonly icon?: IconProps['svg']
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A tab link within a Tab Navigation.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-tab-navigation--docs Tab Navigation docs at Amsterdam Design System}
 */
export const TabNavigationLink = forwardRef(
  (
    { children, className, icon, linkComponent, ...restProps }: TabNavigationLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <li className="ams-tab-navigation__item">
        <Tag
          {...restProps}
          className={clsx('ams-tab-navigation__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {icon && <Icon svg={icon} />}
          <span className="ams-tab-navigation__link-label-wrapper">
            <span aria-hidden="true" className="ams-tab-navigation__link-label-hidden" hidden>
              {children}
            </span>
            <span className="ams-tab-navigation__link-label">{children}</span>
          </span>
        </Tag>
      </li>
    )
  },
)

TabNavigationLink.displayName = 'TabNavigation.Link'
