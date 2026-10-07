/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { MenuContext } from './MenuContext'
import { MenuItem } from './MenuItem'
import { MenuLink } from './MenuLink'

export type MenuProps = {
  /**
   * A name for this menu, which screen readers will announce.
   * Only applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.
   * @default Hoofdmenu
   */
  readonly accessibleName?: string
  /**
   * Whether items with a submenu can be expanded and collapsed.
   * @default false
   */
  readonly collapsible?: boolean
  /**
   * An accessible phrase used in the toggle button label when a submenu is expanded.
   * @default Verberg submenu van
   */
  readonly hideAccessibleLabel?: string
  /** Hides the component on narrow windows. */
  readonly inWideWindow?: boolean
  /**
   * An accessible phrase used in the toggle button label when a submenu is collapsed.
   * @default Toon submenu van
   */
  readonly showAccessibleLabel?: string
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

export const MenuRoot = forwardRef<HTMLElement, MenuProps>(
  (
    {
      accessibleName = 'Hoofdmenu',
      children,
      className,
      collapsible = false,
      hideAccessibleLabel = 'Verberg submenu van',
      inWideWindow,
      showAccessibleLabel = 'Toon submenu van',
      ...restProps
    },
    ref,
  ) => {
    // In a medium or narrow window, the Menu is a child of the `nav` of Page Header.
    // In a wide window, we render a `nav` element and the related accessibility features.
    const Tag = (inWideWindow ? 'nav' : 'div') as ElementType

    const accessibleLabelId = useId()

    return (
      <Tag
        {...restProps}
        aria-labelledby={inWideWindow ? accessibleLabelId : undefined}
        className={clsx('ams-menu', inWideWindow && 'ams-menu--in-wide-window', className)}
        ref={ref}
      >
        {inWideWindow && (
          <h2 className="ams-visually-hidden" id={accessibleLabelId}>
            {accessibleName}
          </h2>
        )}
        <MenuContext.Provider value={{ collapsible, hideAccessibleLabel, showAccessibleLabel }}>
          <ul className="ams-menu__list">{children}</ul>
        </MenuContext.Provider>
      </Tag>
    )
  },
)

MenuRoot.displayName = 'Menu'

/**
 * A primary navigation leading to key areas of a website.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
  Link: MenuLink,
})
