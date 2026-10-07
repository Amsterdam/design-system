/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { MenuItem } from './MenuItem'

export type MenuLinkProps = {
  /** The icon to display for the menu link. Use the filled variant for top-level items. */
  readonly icon?: IconProps['svg']
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A navigation link within a Menu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const MenuLink = forwardRef(
  ({ children, ...restProps }: MenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <MenuItem {...restProps} label={children} ref={ref} />
  ),
)

MenuLink.displayName = 'Menu.Link'
