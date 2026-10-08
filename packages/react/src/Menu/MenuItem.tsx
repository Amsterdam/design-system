/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { Children, forwardRef, useContext, useEffect, useId, useRef } from 'react'

import type { IconProps } from '../Icon'

import { useCollapsible } from '../common/useCollapsible'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton/IconButton'
import { MenuContext } from './MenuContext'

export type MenuItemProps = {
  /**
   * Whether the nested submenu is initially expanded.
   * Ignored when the parent `Menu` is not `collapsible`, when there is no submenu, when the Menu currently hides submenus, or when `expanded` is provided.
   * @default false
   */
  readonly defaultExpanded?: boolean
  /**
   * Whether the nested submenu is expanded.
   * When provided, the component is controlled and internal state is ignored.
   * Ignored when the parent `Menu` is not `collapsible`, when there is no submenu, or when the Menu currently hides submenus.
   */
  readonly expanded?: boolean
  /** The icon to display for the menu item. Use the filled variant for top-level items. */
  readonly icon?: IconProps['svg']
  /** The text for the link. */
  readonly label: string
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
  /**
   * Callback fired when the nested submenu is expanded or collapsed. Receives the new expanded state.
   * Ignored when the parent `Menu` is not `collapsible`, when there is no submenu, or when the Menu currently hides submenus.
   */
  readonly onToggle?: (expanded: boolean) => void
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

/**
 * A menu item that can contain a nested submenu.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-menu--docs Menu docs at Amsterdam Design System}
 */
export const MenuItem = forwardRef(
  (
    {
      children,
      className,
      defaultExpanded,
      expanded,
      icon,
      label,
      linkComponent,
      onToggle,
      ...restProps
    }: MenuItemProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'
    const submenuChildren = Children.toArray(children)
    const hasSubmenu = submenuChildren.length > 0
    const { collapsible, hideAccessibleLabel, hidesSubmenu, showAccessibleLabel, showsSubmenu } =
      useContext(MenuContext)
    const panelId = useId()
    const submenuRef = useRef<HTMLUListElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const isExpandable = collapsible && hasSubmenu && showsSubmenu

    const [isExpanded, toggle] = useCollapsible({
      defaultValue: defaultExpanded,
      gate: isExpandable,
      onToggle,
      value: expanded,
    })

    // A wide Menu shows a submenu only while it is expanded, so without `expandable` these links cannot be reached.
    useEffect(() => {
      if (hasSubmenu && hidesSubmenu) {
        console.warn(
          'A Menu Item has a submenu, but its Menu cannot be expanded, so the submenu stays hidden in a wide window. Set `expandable` on the Menu with `inWideWindow`.',
        )
      }
    }, [hasSubmenu, hidesSubmenu])

    // When collapsing, if focus is inside the submenu that's about to be hidden, move it to the toggle button.
    const moveFocusToToggleButton = (nextIsExpanded: boolean) => {
      if (!nextIsExpanded && submenuRef.current?.contains(document.activeElement)) {
        buttonRef.current?.focus()
      }
    }

    // Restore focus before toggling, so focus never disappears into hidden content.
    const handleToggle = () => {
      moveFocusToToggleButton(!isExpanded)
      toggle()
    }

    return (
      <li
        className={clsx(
          'ams-menu__item',
          isExpandable && 'ams-menu__item--collapsible',
          isExpandable && !isExpanded && 'ams-menu__item--collapsed',
        )}
      >
        <Tag
          {...restProps}
          className={clsx('ams-menu__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {icon && <Icon className="ams-menu__icon" svg={icon} />}
          {label}
        </Tag>
        {isExpandable && (
          <IconButton
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="ams-menu__toggle-button"
            color="inverse"
            label={`${isExpanded ? hideAccessibleLabel : showAccessibleLabel} ${label}`}
            onClick={handleToggle}
            ref={buttonRef}
            svg={ChevronDownIcon}
          />
        )}
        {hasSubmenu && (
          <ul className="ams-menu__submenu" id={isExpandable ? panelId : undefined} ref={submenuRef}>
            {submenuChildren}
          </ul>
        )}
      </li>
    )
  },
)

MenuItem.displayName = 'Menu.Item'
