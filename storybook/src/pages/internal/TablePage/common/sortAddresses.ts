/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { BagAddress } from './bagAddresses'
import type { SortOrder } from './options'

export function sortAddresses(addresses: BagAddress[], sortOrder: SortOrder) {
  const separatorIndex = sortOrder.lastIndexOf('-')
  const field = sortOrder.slice(0, separatorIndex) as keyof BagAddress
  const direction = sortOrder.slice(separatorIndex + 1)

  return [...addresses].sort((a, b) => {
    const aValue = a[field]
    const bValue = b[field]

    if (aValue === undefined && bValue === undefined) return 0
    if (aValue === undefined) return 1
    if (bValue === undefined) return -1

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue)
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'desc' ? bValue - aValue : aValue - bValue
    }

    return 0
  })
}
