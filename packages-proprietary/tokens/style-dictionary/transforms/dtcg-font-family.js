/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { transformTypes } from 'style-dictionary/enums'

/**
 * Transforms a DTCG fontFamily array to a CSS font-family string.
 *
 * The DTCG spec requires fontFamily values to be an array of strings,
 * but CSS expects a comma-separated string where names containing spaces
 * are quoted.
 *
 * @example
 * // Input ($value of a token):
 * ["Amsterdam Sans", "Arial", "sans-serif"]
 *
 * // Output (transformed token value):
 * "'Amsterdam Sans', Arial, sans-serif"
 * @see {@link https://www.designtokens.org/TR/2025.10/format/#font-family} DTCG fontFamily spec
 */
export const dtcgFontFamily = {
  filter: (token) => (token.$type ?? token.type) === 'fontFamily' && Array.isArray(token.$value ?? token.value),
  name: 'dtcg/fontFamily',
  transform: (token) => {
    const value = token.$value ?? token.value
    return value.map((name) => (name.includes(' ') ? `'${name}'` : name)).join(', ')
  },
  transitive: true,
  type: transformTypes.value,
}
