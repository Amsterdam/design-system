/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Token } from './DesignTokensTable.types'

/** Type guard that checks whether a value is a leaf `Token` node (i.e. has a `$value` key). */
export const isTokenValue = (value: unknown): value is Token =>
  typeof value === 'object' && value !== null && '$value' in value
