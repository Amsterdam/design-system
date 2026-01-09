import './design-tokens-table.css'
import { Code } from './Code'

type TokenValue = {
  $value: string
}

type DesignTokens = {
  [key: string]: TokenValue | DesignTokens
}

type TokenEntry = {
  path: string
  value: string
}

const flattenTokens = (tokens: DesignTokens | TokenValue, parentPath: string[] = []): TokenEntry[] => {
  if ('$value' in tokens) {
    return []
  }

  return Object.entries(tokens).flatMap(([key, value]) => {
    const currentToken = [...parentPath, key]

    // Check if the value is a token object with a $value property
    if ('$value' in value && typeof value.$value === 'string') {
      // Return a flat token with CSS variable format (--ams-)
      return [{ path: '--' + currentToken.join('-'), value: value.$value }]
    }

    // Flatten nested objects
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return flattenTokens(value, currentToken)
    }

    // Return empty when there are no more nested objects left
    return []
  })
}

type DesignTokensTableRowProps = {
  name: string
  value: string
}

const DesignTokensTableRow = ({ name, value }: DesignTokensTableRowProps) => (
  <tr>
    <td>
      <Code>var({name})</Code>
    </td>
    <td>
      <Code>{value}</Code>
    </td>
  </tr>
)

DesignTokensTableRow.displayName = 'DesignTokensTable.Row'

const DesignTokensTableRoot = ({ tokens }: { tokens: DesignTokens }) => {
  const flatTokens = flattenTokens(tokens)

  return (
    <div className="ams-storybook-design-tokens-table">
      <table>
        <thead className="ams-storybook-design-tokens-table--header">
          <tr>
            <th>CSS variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {flatTokens.map(({ path, value }) => (
            <DesignTokensTableRow key={path} name={path} value={value} />
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
