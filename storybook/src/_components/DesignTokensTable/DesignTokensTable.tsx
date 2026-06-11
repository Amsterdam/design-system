/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './design-tokens-table.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import type { Tokens } from './DesignTokensTable.types'

import { DesignTokensTableRow } from './DesignTokensTableRow'
import { flattenTokens } from './flattenTokens'

type DesignTokensTableRootProps = {
  /** Keys to omit from the (optionally path-narrowed) token group. */
  readonly exclude?: string[]
  /** Whether to hide the Example column entirely. */
  readonly hideExamples?: boolean
  /** Dot-separated path to a subtree, e.g. `"ams.inputs.hover"`. The path segments become the CSS variable prefix so that full names are preserved. */
  readonly path?: string
  /** Whether to show a Description column populated from the `$description` field. */
  readonly showDescriptions?: boolean
  /** The raw nested token object to display, typically imported directly from a JSON token file. */
  readonly tokens: Tokens
} & Readonly<HTMLAttributes<HTMLDivElement>>

const DesignTokensTableRoot = ({
  className,
  exclude,
  hideExamples,
  path,
  showDescriptions,
  tokens,
  ...restProps
}: DesignTokensTableRootProps) => {
  // Walk the path to reach the target subtree, collecting any group-level $type along the way.
  let subtree: Tokens = tokens
  const pathSegments = path ? path.split('.') : []
  let inheritedType: string | undefined

  let pathIsValid = true

  for (const segment of pathSegments) {
    if (typeof subtree['$type'] === 'string') {
      inheritedType = subtree['$type']
    }

    const next = subtree[segment]

    if (typeof next === 'object' && next !== null && !Array.isArray(next)) {
      subtree = next as Tokens
    } else {
      pathIsValid = false
      break
    }
  }

  // Remove excluded keys from the subtree.
  if (exclude?.length) {
    subtree = Object.fromEntries(Object.entries(subtree).filter(([key]) => !exclude.includes(key))) as Tokens
  }

  const flatTokens = pathIsValid ? flattenTokens(subtree, pathSegments, inheritedType) : []
  const columnCount = 2 + (showDescriptions ? 1 : 0) + (hideExamples ? 0 : 1)

  return (
    <div {...restProps} className={clsx('_ams-design-tokens-table', className)}>
      <table>
        <thead className="_ams-design-tokens-table__header">
          <tr>
            <th>CSS variable</th>
            <th>Value</th>
            {showDescriptions && <th>Description</th>}
            {!hideExamples && <th>Example</th>}
          </tr>
        </thead>
        <tbody>
          {!pathIsValid ? (
            <tr>
              <td colSpan={columnCount}>Invalid path: &ldquo;{path}&rdquo;.</td>
            </tr>
          ) : flatTokens.length ? (
            flatTokens.map(({ deprecated, description, path: tokenPath, type, value }) => (
              <DesignTokensTableRow
                deprecated={deprecated}
                description={description}
                hideExamples={hideExamples}
                key={tokenPath}
                name={tokenPath}
                showDescriptions={showDescriptions}
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

/**
 * Renders a design token JSON file as a three-column table (CSS variable name, value, visual example).
 */
export const DesignTokensTable = Object.assign(DesignTokensTableRoot, {
  Row: DesignTokensTableRow,
})
