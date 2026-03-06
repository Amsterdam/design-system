/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { transformTypes } from 'style-dictionary/enums'

import { dimensionToString } from '../dimensionToString.js'

/**
 * Transforms DTCG dimension objects to CSS value strings.
 *
 * @example
 * // Input ($value of a token):
 * { value: 1, unit: 'rem' }
 *
 * // Output (transformed token value):
 * '1rem'
 * @see {@link https://www.designtokens.org/TR/2025.10/format/#dimension} DTCG dimension spec
 */
export const dtcgDimension = {
  filter: (token) => {
    const value = token.$value ?? token.value
    return value?.value !== null && value?.unit
  },
  name: 'dtcg/dimension',
  transform: (token) => dimensionToString(token.$value ?? token.value),
  transitive: true,
  type: transformTypes.value,
}
