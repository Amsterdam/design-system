/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MenuLinkProps, MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import { PlusCircleFillIcon, QuestionMarkCircleFillIcon } from '@amsterdam/design-system-react-icons'

type MenuItem = {
  href: string
  icon: MenuLinkProps['icon']
  text: string
}

const menuItems: MenuItem[] = [
  {
    href: '#',
    icon: <PlusCircleFillIcon />,
    text: 'Nieuwe chat',
  },
  {
    href: '#',
    icon: <QuestionMarkCircleFillIcon />,
    text: 'Veelgestelde vragen',
  },
]

export const MenuWithItems = (props: MenuProps) => (
  <Menu {...props}>
    {menuItems.map(({ href, icon, text }) => (
      <Menu.Link href={href} icon={icon} key={text}>
        {text}
      </Menu.Link>
    ))}
  </Menu>
)
