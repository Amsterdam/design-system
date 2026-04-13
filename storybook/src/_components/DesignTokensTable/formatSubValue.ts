/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DimensionValue } from './DesignTokensTable.types'

import { isDimensionValue } from './isDimensionValue'

/** Formats a dimension-or-reference sub-property into a display string. */
export const formatSubValue = (subValue: DimensionValue | string): string =>
  isDimensionValue(subValue) ? `${subValue.value}${subValue.unit}` : subValue
