/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

type MenuItem = {
  href: string
  label: string
}

export const collapsibleMenuItems: MenuItem[][] = [
  [
    { href: '#', label: 'Kaart' },
    { href: '#', label: 'Panoramabeelden' },
    { href: '#', label: 'Tabellen' },
    { href: '#', label: 'Catalogus (Beta)' },
    { href: '#', label: 'Kaarten' },
    { href: '#', label: 'Datacatalogus' },
  ],
  [
    { href: '#', label: 'Over de organisatie' },
    { href: '#', label: 'Over het dataplatform' },
  ],
  [
    { href: '#', label: 'Help' },
    { href: '#', label: 'Contact' },
  ],
]

export const headerMenuItems: MenuItem[] = [
  { href: '#', label: 'Stad' },
  { href: '#', label: 'Techniek' },
  { href: '#', label: 'Historie' },
  { href: '#', label: 'Duurzaamheid' },
]
