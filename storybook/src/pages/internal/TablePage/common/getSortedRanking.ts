/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SortDirection, SortOrder } from './options'
import type { Ranking, Team } from './ranking'

export function getSortedRanking(ranking: Ranking, sortOrder: SortOrder) {
  const [field, direction] = sortOrder.split('-') as [keyof Team, SortDirection]

  return [...ranking].sort((a, b) => {
    const aValue = typeof a[field] === 'string' ? a[field].toLowerCase() : a[field]
    const bValue = typeof b[field] === 'string' ? b[field].toLowerCase() : b[field]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue)
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'desc' ? bValue - aValue : aValue - bValue
    }

    return 0
  })
}
