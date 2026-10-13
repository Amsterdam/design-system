/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'

import { navigationItems } from './navigationItems'

export type MenuWithItemsProps = {
  /** The id of the link to the page itself. */
  readonly currentPageId?: string
  /** The id of the link to the section of the page, for a page the Menu has no link to. */
  readonly currentSectionId?: string
  /** Opens the wide Menu when the current page is in a submenu. */
  readonly expandForCurrentSubmenu?: boolean
  /** Whether to render first-level links only, or links with submenu links. */
  readonly navigationDepth?: 1 | 2
} & MenuProps

// Both Menus of a page must offer the same links, so one component renders the list for either position.
export const MenuWithItems = ({
  currentPageId,
  currentSectionId,
  expandForCurrentSubmenu = false,
  navigationDepth = 1,
  ...restProps
}: MenuWithItemsProps) => {
  // Only a link to the page itself is the current page. A page the Menu has no link to marks its section instead.
  const ariaCurrent = (id: string): 'page' | 'true' | undefined => {
    if (id === currentPageId) return 'page'
    if (id === currentSectionId) return 'true'

    return undefined
  }

  const startsOpen = (id: string, submenu?: { id: string }[]) =>
    submenu !== undefined && [id, ...submenu.map((subItem) => subItem.id)].some((itemId) => ariaCurrent(itemId))

  const menuStartsOpen = expandForCurrentSubmenu && navigationItems.some(({ id, submenu }) => startsOpen(id, submenu))

  return (
    <Menu defaultExpanded={menuStartsOpen} key={currentPageId ?? currentSectionId} {...restProps}>
      {navigationItems.map((item) => {
        const { href, icon, id, submenu, text } = item

        if (navigationDepth === 2 && submenu !== undefined) {
          return (
            <Menu.Item
              aria-current={ariaCurrent(id)}
              defaultExpanded={startsOpen(id, submenu)}
              href={href}
              icon={icon}
              key={id}
              label={text}
            >
              {submenu.map((subItem) => (
                <Menu.Link aria-current={ariaCurrent(subItem.id)} href={subItem.href} key={subItem.id}>
                  {subItem.text}
                </Menu.Link>
              ))}
            </Menu.Item>
          )
        }

        return (
          <Menu.Link aria-current={ariaCurrent(id)} href={href} icon={icon} key={id}>
            {text}
          </Menu.Link>
        )
      })}
    </Menu>
  )
}
