/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { BagAddress } from './bagAddresses'

export type SortDirection = 'asc' | 'desc'
export type SortOrder = `${keyof BagAddress}-${SortDirection}`

export const sortOptions: Array<{ label: string; value: SortOrder }> = [
  { label: 'Straat A-Z', value: 'straat-asc' },
  { label: 'Straat Z-A', value: 'straat-desc' },
  { label: 'Huisnummer oplopend', value: 'huisnummer-asc' },
  { label: 'Huisnummer aflopend', value: 'huisnummer-desc' },
  { label: 'Postcode A-Z', value: 'postcode-asc' },
  { label: 'Oppervlakte groot-klein', value: 'oppervlakte-desc' },
  { label: 'Oppervlakte klein-groot', value: 'oppervlakte-asc' },
  { label: 'Bouwjaar oud-nieuw', value: 'bouwjaar-asc' },
  { label: 'Bouwjaar nieuw-oud', value: 'bouwjaar-desc' },
]
