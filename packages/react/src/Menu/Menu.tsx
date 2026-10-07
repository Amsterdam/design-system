/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { ChevronDoubleBackwardIcon, ChevronDoubleForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { useCollapsible } from '../common/useCollapsible'
import { IconButton } from '../IconButton/IconButton'
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
   * The accessible text for the button when the menu is expanded.
   * Ignored unless `expandable` and `inWideWindow` are both `true`.
   * @default Klap menu in
   */
  readonly collapseButtonLabel?: string
  /**
   * Whether the wide-window menu is initially expanded.
   * Ignored unless `expandable` and `inWideWindow` are both `true`. Also ignored when `expanded` is provided.
   * @default false
   */
  readonly defaultExpanded?: boolean
  /**
   * Whether the wide-window menu can be expanded and collapsed.
   * @default false
   */
  readonly expandable?: boolean
  /**
   * The accessible text for the button when the menu is collapsed.
   * Ignored unless `expandable` and `inWideWindow` are both `true`.
   * @default Klap menu uit
   */
  readonly expandButtonLabel?: string
  /**
   * Whether the wide-window menu is expanded.
   * When provided, the component is controlled and internal state is ignored.
   * Ignored unless `expandable` and `inWideWindow` are both `true`.
   */
  readonly expanded?: boolean
  /** Hides the component on narrow windows. */
  readonly inWideWindow?: boolean
  /**
   * Callback fired when the wide-window menu is expanded or collapsed. Receives the new expanded state.
   * Ignored unless `expandable` and `inWideWindow` are both `true`.
   */
  readonly onToggle?: (expanded: boolean) => void
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

export const MenuRoot = forwardRef<HTMLElement, MenuProps>(
  (
    {
      accessibleName = 'Hoofdmenu',
      children,
      className,
      collapseButtonLabel = 'Klap menu in',
      defaultExpanded = false,
      expandable = false,
      expandButtonLabel = 'Klap menu uit',
      expanded,
      inWideWindow,
      onToggle,
      ...restProps
    },
    ref,
  ) => {
    // In a medium or narrow window, the Menu is a child of the `nav` of Page Header.
    // In a wide window, we render a `nav` element and the related accessibility features.
    const Tag = (inWideWindow ? 'nav' : 'div') as ElementType
    const isExpandable = Boolean(expandable && inWideWindow)

    const accessibleLabelId = useId()
    const menuListId = useId()

    const [isExpanded, toggle] = useCollapsible({
      defaultValue: defaultExpanded,
      gate: isExpandable,
      onToggle,
      value: expanded,
    })

    return (
      <Tag
        {...restProps}
        aria-labelledby={inWideWindow ? accessibleLabelId : undefined}
        className={clsx(
          'ams-menu',
          inWideWindow && 'ams-menu--in-wide-window',
          isExpandable && 'ams-menu--expandable',
          isExpandable && isExpanded && 'ams-menu--expanded',
          className,
        )}
        ref={ref}
      >
        {inWideWindow && (
          <h2 className="ams-visually-hidden" id={accessibleLabelId}>
            {accessibleName}
          </h2>
        )}
        {isExpandable && (
          <IconButton
            aria-controls={menuListId}
            aria-expanded={isExpanded}
            className="ams-menu__expand-button"
            color="inverse"
            label={isExpanded ? collapseButtonLabel : expandButtonLabel}
            onClick={toggle}
            size="heading-3"
            svg={isExpanded ? ChevronDoubleBackwardIcon : ChevronDoubleForwardIcon}
          />
        )}
        <ul className="ams-menu__list" id={isExpandable ? menuListId : undefined}>
          {children}
        </ul>
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
