/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MenuLinkProps } from '@amsterdam/design-system-react'

import {
  BarChartFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  PieChartFillIcon,
  SettingsFillIcon,
} from '@amsterdam/design-system-react-icons'

export type NavigationSubItem = {
  href: string
  id: string
  text: string
}

export type NavigationItem = {
  href: string
  icon: MenuLinkProps['icon']
  id: string
  submenu?: NavigationSubItem[]
  text: string
}

// Menu links take the filled variant of an icon.
export const navigationItems: NavigationItem[] = [
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
