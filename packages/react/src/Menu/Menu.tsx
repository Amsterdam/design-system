/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { MenuLink } from './MenuLink'

export type MenuProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /**
   * A name for this menu, which screen readers will announce.
   * Only applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.
   * @default Hoofdnavigatie
   */
  accessibleName?: string
  /** Hides the component on narrow windows. */
  inWideWindow?: boolean
}

export const MenuRoot = forwardRef(
  (
    { accessibleName = 'Hoofdnavigatie', children, className, inWideWindow, ...restProps }: MenuProps,
    ref: ForwardedRef<any>,
  ) => {
    // In a large window, the Menu appears outside the `nav` of the Page Header.
    // We render a `div` instead to avoid having 2 navigation landmarks
    // and hide the related accessibility features.
    const Tag = inWideWindow ? 'div' : 'nav'

    return (
      <Tag
        {...restProps}
        aria-labelledby={inWideWindow ? 'primary-navigation' : undefined}
        className={clsx('ams-menu', inWideWindow && `ams-menu--in-wide-window`, className)}
        ref={ref}
      >
        {inWideWindow && (
          <h2 className="ams-visually-hidden" id="primary-navigation">
            {accessibleName}
          </h2>
        )}
        <ul className="ams-menu__list">{children}</ul>
      </Tag>
    )
  },
)

MenuRoot.displayName = 'Menu'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const Menu = Object.assign(MenuRoot, { Link: MenuLink })
