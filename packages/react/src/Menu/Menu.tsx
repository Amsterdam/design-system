/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { MenuLink } from './MenuLink'

export type MenuProps = {
  /**
   * A name for this menu, which screen readers will announce.
   * Only applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.
   * @default Hoofdmenu
   */
  readonly accessibleName?: string
  /** Hides the component on narrow windows. */
  readonly inWideWindow?: boolean
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * A primary navigation leading to key areas of a website.
 */
export const MenuRoot = forwardRef<HTMLElement, MenuProps>(
  ({ accessibleName = 'Hoofdmenu', children, className, inWideWindow, ...restProps }, ref) => {
    // In a medium or narrow window, the Menu is a child of the `nav` of Page Header.
    // In a wide window, we render a `nav` element and the related accessibility features.
    const Tag = (inWideWindow ? 'nav' : 'div') as ElementType

    const accessibleLabelId = useId()

    return (
      <Tag
        {...restProps}
        aria-labelledby={inWideWindow ? accessibleLabelId : undefined}
        className={clsx('ams-menu', inWideWindow && `ams-menu--in-wide-window`, className)}
        ref={ref}
      >
        {inWideWindow && (
          <h2 className="ams-visually-hidden" id={accessibleLabelId}>
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
