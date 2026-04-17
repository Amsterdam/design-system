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
  icon: IconProps['svg']
  label: string
  slug: string
  subMenuItems: Array<SubMenuItem>
}

type SubMenuItem = {
  // These random heights in `vb` (viewport block size) simulate content variation in the two Grid Cells on every page.
  cellHeights: [number, number]
  label: string
  slug: string
}

export const menuItems: Array<MenuItem> = [
  {
    icon: GridIcon,
    label: 'Overzicht',
    slug: 'overzicht',
    subMenuItems: [
      { cellHeights: [64, 48], label: 'Samenvatting', slug: 'samenvatting' },
      { cellHeights: [72, 40], label: 'Status', slug: 'status' },
      { cellHeights: [56, 64], label: 'Kenmerken', slug: 'kenmerken' },
      { cellHeights: [80, 32], label: 'Tijdlijn', slug: 'tijdlijn' },
      { cellHeights: [48, 56], label: 'Gerelateerde projecten', slug: 'gerelateerde-projecten' },
    ],
  },
  {
    icon: CalendarIcon,
    label: 'Planning',
    slug: 'planning',
    subMenuItems: [
      { cellHeights: [88, 44], label: 'Fasering', slug: 'fasering' },
      { cellHeights: [52, 72], label: 'Mijlpalen', slug: 'mijlpalen' },
      { cellHeights: [40, 88], label: 'Omleidingen', slug: 'omleidingen' },
      { cellHeights: [76, 36], label: 'Afsluitingen', slug: 'afsluitingen' },
      { cellHeights: [60, 52], label: 'Werkzaamheden', slug: 'werkzaamheden' },
    ],
  },
  {
    icon: MapMarkerIcon,
    label: 'Locatie',
    slug: 'locatie',
    subMenuItems: [
      { cellHeights: [96, 40], label: 'Kaart', slug: 'kaart' },
      { cellHeights: [44, 80], label: 'Werkgebied', slug: 'werkgebied' },
      { cellHeights: [68, 56], label: 'Bereikbaarheid', slug: 'bereikbaarheid' },
      { cellHeights: [56, 68], label: 'Omliggende projecten', slug: 'omliggende-projecten' },
    ],
  },
  {
    icon: DocumentIcon,
    label: 'Documenten',
    slug: 'documenten',
    subMenuItems: [
      { cellHeights: [48, 92], label: 'Vergunningen', slug: 'vergunningen' },
      { cellHeights: [84, 36], label: 'Tekeningen', slug: 'tekeningen' },
      { cellHeights: [60, 60], label: 'Rapporten', slug: 'rapporten' },
      { cellHeights: [36, 76], label: 'Besluiten', slug: 'besluiten' },
      { cellHeights: [72, 48], label: 'Overeenkomsten', slug: 'overeenkomsten' },
    ],
  },
  {
    icon: EuroIcon,
    label: 'Financiën',
    slug: 'financien',
    subMenuItems: [
      { cellHeights: [76, 52], label: 'Begroting', slug: 'begroting' },
      { cellHeights: [44, 84], label: 'Besteding', slug: 'besteding' },
      { cellHeights: [92, 40], label: 'Prognose', slug: 'prognose' },
      { cellHeights: [56, 68], label: 'Facturen', slug: 'facturen' },
      { cellHeights: [64, 44], label: 'Subsidies', slug: 'subsidies' },
    ],
  },
  {
    icon: PersonsIcon,
    label: 'Betrokkenen',
    slug: 'betrokkenen',
    subMenuItems: [
      { cellHeights: [40, 96], label: 'Opdrachtgever', slug: 'opdrachtgever' },
      { cellHeights: [68, 52], label: 'Aannemer', slug: 'aannemer' },
      { cellHeights: [84, 36], label: 'Toezicht', slug: 'toezicht' },
      { cellHeights: [52, 72], label: 'Stakeholders', slug: 'stakeholders' },
      { cellHeights: [60, 60], label: 'Contactpersonen', slug: 'contactpersonen' },
    ],
  },
  {
    icon: MegaphoneIcon,
    label: 'Communicatie',
    slug: 'communicatie',
    subMenuItems: [
      { cellHeights: [72, 44], label: 'Bewonersberichten', slug: 'bewonersberichten' },
      { cellHeights: [48, 80], label: 'Omgevingsmelding', slug: 'omgevingsmelding' },
      { cellHeights: [88, 32], label: 'Klachten en meldingen', slug: 'klachten-en-meldingen' },
      { cellHeights: [36, 64], label: 'Persberichten', slug: 'persberichten' },
      { cellHeights: [56, 56], label: 'Nieuwsbrieven', slug: 'nieuwsbrieven' },
    ],
  },
]
