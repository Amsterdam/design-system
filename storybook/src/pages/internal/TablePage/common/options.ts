/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
export const sortOptions = [
  { label: 'Straat A-Z', value: 'straat-asc' },
  { label: 'Straat Z-A', value: 'straat-desc' },
  { label: 'Huisnummer oplopend', value: 'huisnummer-asc' },
  { label: 'Huisnummer aflopend', value: 'huisnummer-desc' },
  { label: 'Postcode A-Z', value: 'postcode-asc' },
  { label: 'Oppervlakte groot-klein', value: 'oppervlakte-desc' },
  { label: 'Oppervlakte klein-groot', value: 'oppervlakte-asc' },
  { label: 'Bouwjaar oud-nieuw', value: 'bouwjaar-asc' },
  { label: 'Bouwjaar nieuw-oud', value: 'bouwjaar-desc' },
] as const

export type SortOrder = (typeof sortOptions)[number]['value']
