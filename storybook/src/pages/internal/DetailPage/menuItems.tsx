/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'

import {
  CalendarIcon,
  DocumentIcon,
  EuroIcon,
  GridIcon,
  MapMarkerIcon,
  MegaphoneIcon,
  PersonsIcon,
} from '@amsterdam/design-system-react-icons'

type MenuItem = {
  cellHeights: [number, number]
  icon: IconProps['svg']
  label: string
  slug: string
  subMenuItems: Array<SubMenuItem>
}

type SubMenuItem = {
  label: string
  slug: string
}

export const menuItems: Array<MenuItem> = [
  {
    cellHeights: [48, 32],
    icon: GridIcon,
    label: 'Overzicht',
    slug: 'overzicht',
    subMenuItems: [
      { label: 'Samenvatting', slug: 'samenvatting' },
      { label: 'Status', slug: 'status' },
      { label: 'Kenmerken', slug: 'kenmerken' },
      { label: 'Tijdlijn', slug: 'tijdlijn' },
      { label: 'Gerelateerde projecten', slug: 'gerelateerde-projecten' },
    ],
  },
  {
    cellHeights: [78, 42],
    icon: CalendarIcon,
    label: 'Planning',
    slug: 'planning',
    subMenuItems: [
      { label: 'Fasering', slug: 'fasering' },
      { label: 'Mijlpalen', slug: 'mijlpalen' },
      { label: 'Omleidingen', slug: 'omleidingen' },
      { label: 'Afsluitingen', slug: 'afsluitingen' },
      { label: 'Werkzaamheden', slug: 'werkzaamheden' },
    ],
  },
  {
    cellHeights: [40, 52],
    icon: MapMarkerIcon,
    label: 'Locatie',
    slug: 'locatie',
    subMenuItems: [
      { label: 'Kaart', slug: 'kaart' },
      { label: 'Werkgebied', slug: 'werkgebied' },
      { label: 'Bereikbaarheid', slug: 'bereikbaarheid' },
      { label: 'Omliggende projecten', slug: 'omliggende-projecten' },
    ],
  },
  {
    cellHeights: [64, 24],
    icon: DocumentIcon,
    label: 'Documenten',
    slug: 'documenten',
    subMenuItems: [
      { label: 'Vergunningen', slug: 'vergunningen' },
      { label: 'Tekeningen', slug: 'tekeningen' },
      { label: 'Rapporten', slug: 'rapporten' },
      { label: 'Besluiten', slug: 'besluiten' },
      { label: 'Overeenkomsten', slug: 'overeenkomsten' },
    ],
  },
  {
    cellHeights: [42, 30],
    icon: EuroIcon,
    label: 'Financiën',
    slug: 'financien',
    subMenuItems: [
      { label: 'Begroting', slug: 'begroting' },
      { label: 'Besteding', slug: 'besteding' },
      { label: 'Prognose', slug: 'prognose' },
      { label: 'Facturen', slug: 'facturen' },
      { label: 'Subsidies', slug: 'subsidies' },
    ],
  },
  {
    cellHeights: [84, 12],
    icon: PersonsIcon,
    label: 'Betrokkenen',
    slug: 'betrokkenen',
    subMenuItems: [
      { label: 'Opdrachtgever', slug: 'opdrachtgever' },
      { label: 'Aannemer', slug: 'aannemer' },
      { label: 'Toezicht', slug: 'toezicht' },
      { label: 'Stakeholders', slug: 'stakeholders' },
      { label: 'Contactpersonen', slug: 'contactpersonen' },
    ],
  },
  {
    cellHeights: [60, 48],
    icon: MegaphoneIcon,
    label: 'Communicatie',
    slug: 'communicatie',
    subMenuItems: [
      { label: 'Bewonersberichten', slug: 'bewonersberichten' },
      { label: 'Omgevingsmelding', slug: 'omgevingsmelding' },
      { label: 'Klachten en meldingen', slug: 'klachten-en-meldingen' },
      { label: 'Persberichten', slug: 'persberichten' },
      { label: 'Nieuwsbrieven', slug: 'nieuwsbrieven' },
    ],
  },
]
