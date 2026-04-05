/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ShadowValue, TokenEntry, Tokens } from './DesignTokensTable.types'

import { formatShadowValue } from './formatShadowValue'
import { isDimensionValue } from './isDimensionValue'
import { isTokenValue } from './isTokenValue'

/**
 * Recursively flattens a nested token tree into a list of `TokenEntry` objects.
 * Composite values (e.g. `{ value, unit }`) are normalised into a single string (e.g. `'1rem'`).
 * Token type is resolved from, in order of precedence: `$extensions['nl.amsterdam.subtype']`, `$type`,
 * then `$extensions['nl.amsterdam.type']`.
 * A group-level `$type` is inherited by all descendant tokens, following the DTCG specification.
 * @param tokens - The (possibly nested) token group to flatten.
 * @param scope - The accumulated path segments from ancestor keys (used for recursion).
 * @param inheritedType - A `$type` inherited from an ancestor group.
 */
export const flattenTokens = (tokens: Tokens, scope: string[] = [], inheritedType?: string): TokenEntry[] => {
  // A group-level $type overrides any inherited type for this group and its descendants.
  const groupType = ('$type' in tokens && typeof tokens['$type'] === 'string' ? tokens['$type'] : inheritedType) as
    | string
    | undefined

  return Object.entries(tokens).flatMap(([key, node]) => {
    if (key.startsWith('$')) return []

    const currentPath = [...scope, key]

    // Case 1: It is a valid token
    if (isTokenValue(node)) {
      const { $deprecated, $description, $extensions, $type, $value } = node
      const type = $extensions?.['nl.amsterdam.subtype'] ?? $type ?? groupType ?? $extensions?.['nl.amsterdam.type']

      // Combine unit and value into a single string e.g. "1rem"
      let normalizedValue = ''

      if (typeof $value === 'string') {
        normalizedValue = $value
      } else if (Array.isArray($value)) {
        normalizedValue = $value.map((name) => (name.includes(' ') ? `'${name}'` : name)).join(', ')
      } else if (isDimensionValue($value)) {
        normalizedValue = `${$value.value}${$value.unit}`
      } else if (type === 'shadow' && typeof $value === 'object') {
        normalizedValue = formatShadowValue($value as ShadowValue)
      }

      return [
        {
          deprecated: $deprecated,
          description: $description,
          path: `--${currentPath.join('-')}`,
          type,
          value: normalizedValue,
        },
      ]
    }

    // Case 2: It is a nested group of tokens
    if (typeof node === 'object' && node !== null && !Array.isArray(node)) {
      return flattenTokens(node as Tokens, currentPath, groupType)
    }

    // Case 3: Invalid or empty group
    return []
  })
}
