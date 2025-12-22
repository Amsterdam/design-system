import './design-tokens-table.css'
import { Code } from './Code'

type TokenValue = {
  value: string
}

type DesignTokens = {
  [key: string]: TokenValue | DesignTokens
}

type TokenEntry = {
  path: string
  value: string
}

const flattenTokens = (tokens: DesignTokens, parentPath: string[] = []): TokenEntry[] => {
  return Object.entries(tokens).flatMap(([key, value]) => {
    const currentToken = [...parentPath, key]

    if ('value' in value) {
      if (typeof value.value !== 'string') {
        return []
      }

      return [{ path: '--' + currentToken.join('-'), value: value.value }]
    } else {
      return flattenTokens(value, currentToken)
    }
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
