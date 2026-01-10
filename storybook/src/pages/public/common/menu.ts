/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PageHeaderMenuLinkProps } from '@amsterdam/design-system-react'

import { SearchIcon } from '@amsterdam/design-system-react-icons'

type PageHeaderMenuLink = {
  label: string
} & PageHeaderMenuLinkProps

export const pageHeaderMenuLinks: PageHeaderMenuLink[] = [
  {
    label: 'English',
    lang: 'en',
  },
  {
    href: 'https://mijn.amsterdam.nl/',
    label: 'Mijn Amsterdam',
  },
  {
    fixed: true,
    icon: SearchIcon,
    label: 'Zoeken',
  },
]

type MegaMenuLink = string

export const megaMenuLinkLists: MegaMenuLink[][] = [
  [
    'Afval',
    'Belastingen',
    'Bestuur en organisatie',
    'Bouw- en verkeersprojecten',
    'Burgerzaken',
    'Jeugdhulp',
    'Leefomgeving',
    'Ondernemen',
    'Onderwijs',
    'Parkeren',
  ],
  [
    'Sport',
    'Stadsdelen',
    'Subsidies',
    'Vergunningen en ontheffingen',
    'Verkeer en vervoer',
    'Verkiezingen',
    'Werk aan de weg',
    'Werk en inkomen',
    'Wonen, bouwen en verbouwen',
    'Zorg en ondersteuning',
  ],
  [
    'Nieuws',
    'Nieuwsbrieven',
    'Bijeenkomsten en activiteiten',
    'Social media, krant en tv',
    'Evenementen en herdenkingen',
    'Bekendmakingen',
    'Vacatures',
    'Contact',
  ],
]
