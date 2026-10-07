/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren, ReactNode } from 'react'

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
   * Whether the nested list is initially expanded.
   * Ignored when the parent `Menu` is not `collapsible`, when there is no nested list, or when `expanded` is provided.
   * @default false
   */
  readonly defaultExpanded?: boolean
  /**
   * Whether the nested list is expanded.
   * When provided, the component is controlled and internal state is ignored.
   * Ignored when the parent `Menu` is not `collapsible` or when there is no nested list.
   */
  readonly expanded?: boolean
  /** The icon to display for the menu item. Use the filled variant for top-level items. */
  readonly icon?: IconProps['svg']
  /** The text or inline content for the link. */
  readonly label: ReactNode
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
  /**
   * Callback fired when the nested list is expanded or collapsed. Receives the new expanded state.
   * Ignored when the parent `Menu` is not `collapsible` or when there is no nested list.
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
    const { collapsible, hideAccessibleLabel, showAccessibleLabel } = useContext(MenuContext)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const itemRef = useRef<HTMLLIElement>(null)
    const submenuId = useId()
    const isCollapsible = collapsible && hasSubmenu

    const [isExpanded, toggle] = useCollapsible({
      defaultValue: defaultExpanded,
      gate: isCollapsible,
      onToggle,
      value: expanded,
    })

    useEffect(() => {
      if (isCollapsible && typeof label !== 'string') {
        console.warn(
          'A collapsible Menu Item with a submenu needs a string `label` to name its toggle button accessibly.',
        )
      }
    }, [isCollapsible, label])

    const moveFocusToToggleButton = (nextIsExpanded: boolean) => {
      if (!nextIsExpanded && itemRef.current && document.activeElement instanceof HTMLElement) {
        const submenu = itemRef.current.querySelector('.ams-menu__submenu')

        if (submenu?.contains(document.activeElement)) {
          buttonRef.current?.focus()
        }
      }
    }

    const handleToggle = () => {
      moveFocusToToggleButton(!isExpanded)
      toggle()
    }

    const buttonLabel =
      typeof label === 'string'
        ? `${isExpanded ? hideAccessibleLabel : showAccessibleLabel} ${label}`
        : isExpanded
          ? hideAccessibleLabel
          : showAccessibleLabel

    return (
      <li className={clsx('ams-menu__item', isCollapsible && !isExpanded && 'ams-menu__item--collapsed')} ref={itemRef}>
        <Tag
          {...restProps}
          className={clsx('ams-menu__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {icon && <Icon className="ams-menu__icon" svg={icon} />}
          {label}
        </Tag>
        {isCollapsible && (
          <IconButton
            aria-controls={submenuId}
            aria-expanded={isExpanded}
            className="ams-menu__button"
            color="inverse"
            label={buttonLabel}
            onClick={handleToggle}
            ref={buttonRef}
            svg={ChevronDownIcon}
          />
        )}
        {hasSubmenu && (
          <ul className="ams-menu__submenu" {...(isCollapsible && { id: submenuId })}>
            {submenuChildren}
          </ul>
        )}
      </li>
    )
  },
)

MenuItem.displayName = 'Menu.Item'
