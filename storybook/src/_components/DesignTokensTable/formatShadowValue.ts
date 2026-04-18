/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ShadowValue } from './DesignTokensTable.types'

import { formatSubValue } from './formatSubValue'

/** Formats a shadow value object into a CSS-like display string. */
export const formatShadowValue = (shadow: ShadowValue): string => {
  const parts = [
    ...(shadow.inset ? ['inset'] : []),
    formatSubValue(shadow.offsetX),
    formatSubValue(shadow.offsetY),
    formatSubValue(shadow.blur),
    formatSubValue(shadow.spread),
    shadow.color,
  ]

  return parts.join(' ')
}
