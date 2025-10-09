import type { MenuLinkProps, MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import {
  BarChartIcon,
  DocumentsIcon,
  FolderIcon,
  PieChartIcon,
  SettingsIcon,
} from '@amsterdam/design-system-react-icons'

type MenuItem = {
  href: string
  icon: MenuLinkProps['icon']
  text: string
}

const menuItems: MenuItem[] = [
  {
    href: '#',
    icon: <PieChartIcon />,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderIcon />,
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsIcon />,
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: <BarChartIcon />,
    text: 'Analyses',
  },
  {
    href: '#',
    icon: <SettingsIcon />,
    text: 'Instellingen',
  },
]

export const MenuWithItems = (props: MenuProps) => (
  <Menu {...props}>
    {menuItems.map(({ href, icon, text }) => (
      <Menu.Link color="inverse" href={href} icon={icon} key={text}>
        {text}
      </Menu.Link>
    ))}
  </Menu>
)
