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
  $extensions?: {
    'nl.amsterdam.subtype'?: string
    'nl.amsterdam.type'?: string
  }
  $type?: string
  $value: DimensionValue | ShadowValue | string
}

/** A nested tree of design tokens, where leaf nodes are `Token` objects. */
type Tokens = {
  [key: string]: Token | Tokens
}

/** A flattened representation of a single token ready for rendering in the table. */
type TokenEntry = {
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
 * @param tokens - The (possibly nested) token group to flatten.
 * @param scope - The accumulated path segments from ancestor keys (used for recursion).
 */
const flattenTokens = (tokens: Tokens, scope: string[] = []): TokenEntry[] =>
  Object.entries(tokens).flatMap(([key, node]) => {
    const currentPath = [...scope, key]

    // Case 1: It is a valid token
    if (isTokenValue(node)) {
      const { $extensions, $type, $value } = node
      const type = $extensions?.['nl.amsterdam.subtype'] ?? $type ?? $extensions?.['nl.amsterdam.type']

      // Combine unit and value into a single string e.g. "1rem"
      let normalizedValue = ''

      if (typeof $value === 'string') {
        normalizedValue = $value
      } else if (isDimensionValue($value)) {
        normalizedValue = `${$value.value}${$value.unit}`
      } else if (type === 'shadow' && typeof $value === 'object') {
        normalizedValue = formatShadowValue($value as ShadowValue)
      }

      return [
        {
          path: `--${currentPath.join('-')}`,
          type,
          value: normalizedValue,
        },
      ]
    }

    // Case 2: It is a nested group of tokens
    if (typeof node === 'object' && node !== null && !Array.isArray(node)) {
      return flattenTokens(node as Tokens, currentPath)
    }

    // Case 3: Invalid or empty group
    return []
  })

type DesignTokensTableRootProps = {
  /** The raw nested token object to display, typically imported directly from a JSON token file. */
  tokens: Tokens
} & HTMLAttributes<HTMLDivElement>

/**
 * Compound component that renders a design token JSON file as a three-column table
 * (CSS variable name, value, visual example).
 */
const DesignTokensTableRoot = ({ className, tokens, ...restProps }: DesignTokensTableRootProps) => {
  const flatTokens = flattenTokens(tokens)

  return (
    <div {...restProps} className={clsx('_ams-design-tokens-table', className)}>
      <table>
        <thead className="_ams-design-tokens-table__header">
          <tr>
            <th>CSS variable</th>
            <th>Value</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {flatTokens.map(({ path, type, value }) => (
            <DesignTokensTableRow key={path} name={path} type={type} value={value} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

DesignTokensTableRoot.displayName = 'DesignTokensTable'

export const DesignTokensTable = Object.assign(DesignTokensTableRoot, {
  Row: DesignTokensTableRow,
})
