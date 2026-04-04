/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './design-tokens-table.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { DesignTokensTableRow } from './DesignTokensTableRow'

/** A dimension expressed as a number and a CSS unit. */
type DimensionValue = { unit: string; value: number }

/** The composite value of a shadow token. */
type ShadowValue = {
  blur: DimensionValue | string
  color: string
  inset?: boolean
  offsetX: DimensionValue | string
  offsetY: DimensionValue | string
  spread: DimensionValue | string
}

/** A single design token node as produced by Style Dictionary (W3C DTCG format). */
type Token = {
  $deprecated?: string
  $description?: string
  $extensions?: {
    'nl.amsterdam.subtype'?: string
    'nl.amsterdam.type'?: string
  }
  $type?: string
  $value: DimensionValue | ShadowValue | string | string[]
}

/** A nested tree of design tokens, where leaf nodes are `Token` objects. Groups may carry a `$type` that descendants inherit. */
type Tokens = {
  [key: string]: Token | Tokens | string | undefined
  $type?: string
}

/** A flattened representation of a single token ready for rendering in the table. */
type TokenEntry = {
  deprecated?: string
  description?: string
  path: string
  type?: string
  value: string
}

/** Type guard that checks whether a value is a leaf `Token` node (i.e. has a `$value` key). */
const isTokenValue = (value: unknown): value is Token =>
  typeof value === 'object' && value !== null && '$value' in value

/** Type guard that checks whether a value is a dimension object (i.e. has `value` and `unit` keys). */
const isDimensionValue = (value: unknown): value is DimensionValue =>
  typeof value === 'object' && value !== null && 'value' in value && 'unit' in value

/** Formats a dimension-or-reference sub-property into a display string. */
const formatSubValue = (subValue: DimensionValue | string): string =>
  isDimensionValue(subValue) ? `${subValue.value}${subValue.unit}` : subValue

/** Formats a shadow value object into a CSS-like display string. */
const formatShadowValue = (shadow: ShadowValue): string => {
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
const flattenTokens = (tokens: Tokens, scope: string[] = [], inheritedType?: string): TokenEntry[] => {
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

type DesignTokensTableRootProps = {
  /** Whether to show a Description column populated from the `$description` field. */
  showDescriptions?: boolean
  /** The raw nested token object to display, typically imported directly from a JSON token file. */
  tokens: Tokens
} & HTMLAttributes<HTMLDivElement>

/**
 * Compound component that renders a design token JSON file as a three-column table
 * (CSS variable name, value, visual example).
 */
const DesignTokensTableRoot = ({ className, showDescriptions, tokens, ...restProps }: DesignTokensTableRootProps) => {
  const flatTokens = flattenTokens(tokens)
  const columnCount = showDescriptions ? 4 : 3

  return (
    <div {...restProps} className={clsx('_ams-design-tokens-table', className)}>
      <table>
        <thead className="_ams-design-tokens-table__header">
          <tr>
            <th>CSS variable</th>
            <th>Value</th>
            {showDescriptions && <th>Description</th>}
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {flatTokens.length ? (
            flatTokens.map(({ deprecated, description, path, type, value }) => (
              <DesignTokensTableRow
                deprecated={deprecated}
                description={showDescriptions ? description : undefined}
                key={path}
                name={path}
                type={type}
                value={value}
              />
            ))
          ) : (
            <tr>
              <td colSpan={columnCount}>No design tokens available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

DesignTokensTableRoot.displayName = 'DesignTokensTable'

export const DesignTokensTable = Object.assign(DesignTokensTableRoot, {
  Row: DesignTokensTableRow,
})
