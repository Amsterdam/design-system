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
  submenu?: { href: string; text: string }[]
  text: string
}

type MenuWithItemsProps = {
  /** Adds the second level of navigation. A wide Menu only shows it while it is expanded. */
  readonly withSubmenus?: boolean
} & MenuProps

// Menu links take the filled variant of an icon.
const menuItems: MenuItem[] = [
  {
    href: '#',
    icon: <PieChartFillIcon />,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderFillIcon />,
    submenu: [
      { href: '#', text: 'Overzicht' },
      { href: '#', text: 'Planning' },
      { href: '#', text: 'Team' },
    ],
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsFillIcon />,
    submenu: [
      { href: '#', text: 'Maandrapportages' },
      { href: '#', text: 'Jaarrapportages' },
    ],
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: <BarChartFillIcon />,
    text: 'Analyses',
  },
  {
    href: '#',
    icon: <SettingsFillIcon />,
    submenu: [
      { href: '#', text: 'Profiel' },
      { href: '#', text: 'Meldingen' },
      { href: '#', text: 'Toegangsbeheer' },
    ],
    text: 'Instellingen',
  },
]

// Both Menus of a page must offer the same links, so one component renders the list for either position.
export const MenuWithItems = ({ withSubmenus, ...restProps }: MenuWithItemsProps) => (
  <Menu {...restProps}>
    {menuItems.map(({ href, icon, submenu, text }) =>
      withSubmenus && submenu ? (
        // Menu Item takes its label as a prop, which leaves its children for the links of the submenu.
        <Menu.Item href={href} icon={icon} key={text} label={text}>
          {submenu.map((subItem) => (
            <Menu.Link href={subItem.href} key={subItem.text}>
              {subItem.text}
            </Menu.Link>
          ))}
        </Menu.Item>
      ) : (
        <Menu.Link href={href} icon={icon} key={text}>
          {text}
        </Menu.Link>
      ),
    )}
  </Menu>
)
