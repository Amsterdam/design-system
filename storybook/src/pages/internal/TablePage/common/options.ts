/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { Team } from './ranking'

export type SortDirection = 'asc' | 'desc'
export type SortOrder = `${keyof Team}-${SortDirection}`

export const sortOptions: Array<{ label: string; value: SortOrder }> = [
  { label: 'Positie', value: 'positie-asc' },
  { label: 'Team oplopend', value: 'team-asc' },
  { label: 'Team aflopend', value: 'team-desc' },
  { label: 'Gewonnen', value: 'gewonnen-desc' },
  { label: 'Gelijk', value: 'gelijk-desc' },
  { label: 'Verloren', value: 'verloren-desc' },
]
