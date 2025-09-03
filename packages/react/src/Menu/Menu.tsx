/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import { MenuLink } from './MenuLink'

export type MenuProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  accessibleName?: string
}

export const MenuRoot = forwardRef(
  (
    { accessibleName = 'Hoofdnavigatie', children, className, ...restProps }: MenuProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <nav {...restProps} aria-labelledby="primary-navigation" className={clsx('ams-menu', className)} ref={ref}>
      <h2 className="ams-visually-hidden" id="primary-navigation">
        {accessibleName}
      </h2>
      <ul className="ams-menu__list">{children}</ul>
    </nav>
  ),
)

MenuRoot.displayName = 'Menu'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const Menu = Object.assign(MenuRoot, { Link: MenuLink })
