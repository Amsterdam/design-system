import './design-tokens-table.css'
import { Code } from './Code'

type TokenEntry = {
  path: string
  value: string
}

type IDesignTokensTable = {
  tokens: IDesignTokensTable
}

const flattenTokens = (tokens: IDesignTokensTable, parentPath: string[] = []): TokenEntry[] => {
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

const DesignTokensTableRoot = ({ tokens }: IDesignTokensTable) => {
  const flatTokens = flattenTokens(tokens)

  return (
    <div className="ams-storybook-design-tokens-table">
      <table>
        <thead>
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
