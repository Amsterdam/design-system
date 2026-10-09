/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MenuLinkProps, MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import {
  BarChartFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  PieChartFillIcon,
  SettingsFillIcon,
} from '@amsterdam/design-system-react-icons'

type MenuItem = {
  href: string
  icon: MenuLinkProps['icon']
  id: string
  submenu?: { href: string; id: string; text: string }[]
  text: string
}

type MenuWithItemsProps = {
  /** The id of the link to the page itself. */
  readonly currentPageId?: string
  /** The id of the link to the section of the page, for a page the Menu has no link to. */
  readonly currentSectionId?: string
} & MenuProps

// Menu links take the filled variant of an icon.
const menuItems: MenuItem[] = [
  {
    href: '#',
    icon: <PieChartFillIcon />,
    id: 'dashboard',
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderFillIcon />,
    id: 'projecten',
    submenu: [
      { href: '#', id: 'projecten-lopend', text: 'Lopende projecten' },
      { href: '#', id: 'projecten-gepland', text: 'Geplande projecten' },
      { href: '#', id: 'projecten-archief', text: 'Archief' },
    ],
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsFillIcon />,
    id: 'rapportages',
    submenu: [
      { href: '#', id: 'rapportages-vergunninghouders', text: 'Vergunninghouders' },
      { href: '#', id: 'rapportages-maand', text: 'Maandrapportages' },
      { href: '#', id: 'rapportages-jaar', text: 'Jaarrapportages' },
    ],
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: <BarChartFillIcon />,
    id: 'analyses',
    text: 'Analyses',
  },
  {
    href: '#',
    icon: <SettingsFillIcon />,
    id: 'instellingen',
    submenu: [
      { href: '#', id: 'instellingen-profiel', text: 'Profiel' },
      { href: '#', id: 'instellingen-meldingen', text: 'Meldingen' },
      { href: '#', id: 'instellingen-toegang', text: 'Toegangsbeheer' },
    ],
    text: 'Instellingen',
  },
]

// Both Menus of a page must offer the same links, so one component renders the list for either position.
export const MenuWithItems = ({ currentPageId, currentSectionId, ...restProps }: MenuWithItemsProps) => {
  // Only a link to the page itself is the current page. A page the Menu has no link to marks its section instead.
  const ariaCurrent = (id: string): 'page' | 'true' | undefined => {
    if (id === currentPageId) return 'page'
    if (id === currentSectionId) return 'true'

    return undefined
  }

  // A submenu starts open when its parent or one of its links is current, so users see where they are.
  const startsOpen = ({ id, submenu = [] }: MenuItem) =>
    submenu.length > 0 && [id, ...submenu.map((subItem) => subItem.id)].some((itemId) => ariaCurrent(itemId))

  return (
    // A wide Menu shows its submenus only while it is expanded, so an open submenu expands it as well.
    // The Menu in the Page Header ignores `defaultExpanded`.
    // A Menu reads `defaultExpanded` only when it mounts. The key mounts a new one when a router changes the page,
    // so the Menu opens at the new place as well.
    <Menu defaultExpanded={menuItems.some(startsOpen)} key={currentPageId ?? currentSectionId} {...restProps}>
      {menuItems.map((item) => {
        const { href, icon, id, submenu, text } = item

        return submenu ? (
          // Menu Item takes its label as a prop, which leaves its children for the links of the submenu.
          <Menu.Item
            aria-current={ariaCurrent(id)}
            defaultExpanded={startsOpen(item)}
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
        ) : (
          <Menu.Link aria-current={ariaCurrent(id)} href={href} icon={icon} key={id}>
            {text}
          </Menu.Link>
        )
      })}
    </Menu>
  )
}
