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

export const megaMenuLinks: MegaMenuLink[] = ['Afval', 'Bestuur en organisatie', 'Gemeentebelastingen', '…']
