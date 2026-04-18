/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DimensionValue } from './DesignTokensTable.types'

/** Type guard that checks whether a value is a dimension object (i.e. has `value` and `unit` keys). */
export const isDimensionValue = (value: unknown): value is DimensionValue =>
  typeof value === 'object' &&
  value !== null &&
  'value' in value &&
  'unit' in value &&
  typeof (value as DimensionValue).value === 'number' &&
  typeof (value as DimensionValue).unit === 'string'
