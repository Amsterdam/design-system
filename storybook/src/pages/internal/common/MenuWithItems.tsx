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

export type MenuItem = {
  href: string
  icon: MenuLinkProps['icon']
  text: string
}

// Menu links take the filled variant of an icon.
const defaultMenuItems: MenuItem[] = [
  {
    href: '#',
    icon: <PieChartFillIcon />,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderFillIcon />,
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsFillIcon />,
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
    text: 'Instellingen',
  },
]

type MenuWithItemsProps = {
  // Templates that portray another application pass their own links; the rest share the default ones.
  readonly items?: ReadonlyArray<MenuItem>
} & MenuProps

// Both Menus of a page must offer the same links, so one component renders the list for either position.
export const MenuWithItems = ({ items = defaultMenuItems, ...restProps }: MenuWithItemsProps) => (
  <Menu {...restProps}>
    {items.map(({ href, icon, text }) => (
      <Menu.Link href={href} icon={icon} key={text}>
        {text}
      </Menu.Link>
    ))}
  </Menu>
)
