/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { MenuLink } from './MenuLink'

export type MenuProps = {
  /**
   * A name for this menu, which screen readers will announce.
   * Only applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.
   * @default Hoofdnavigatie
   */
  accessibleName?: string
  /** Hides the component on narrow windows. */
  inWideWindow?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const MenuRoot = forwardRef(
  (
    { accessibleName = 'Hoofdnavigatie', children, className, inWideWindow, ...restProps }: MenuProps,
    ref: ForwardedRef<any>,
  ) => {
    // In a medium or narrow window, the Menu is a child of the `nav` of Page Header.
    // In a wide window, we render a `nav` element and the related accessibility features.
    const Tag = inWideWindow ? 'nav' : 'div'

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
