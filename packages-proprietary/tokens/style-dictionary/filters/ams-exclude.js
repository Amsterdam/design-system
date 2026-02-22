/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Excludes tokens marked for Amsterdam-specific exclusion.
 *
 * Some tokens exist solely for use by other teams in the NL Design System
 * community and should not appear in Amsterdam's own build output. Mark such
 * tokens with `"nl.amsterdam.exclude": true` in their `$extensions` property:
 *
 * @example
 * // Token definition in a *.tokens.json file:
 * {
 *   "box-shadow": {
 *     "$value": "initial",
 *     "$extensions": {
 *       "nl.amsterdam.exclude": true
 *     }
 *   }
 * }
 */
export const amsExclude = {
  filter: (token) => token.$extensions?.['nl.amsterdam.exclude'] !== true,
  name: 'ams/exclude',
}
