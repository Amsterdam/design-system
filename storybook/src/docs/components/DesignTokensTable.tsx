import { BorderSample } from './BorderSample'
import { Code } from './Code'

type TokenValue = {
  $extensions?: {
    'amsterdam.designsystem.type'?: string
  }
  $type?: string
  $value: string
}

type DesignTokens = {
  [key: string]: TokenValue | DesignTokens
}

type TokenEntry = {
  path: string
  type?: string
  value: string
}

const isTokenValue = (value: unknown): value is TokenValue => {
  return typeof value === 'object' && value !== null && '$value' in value
}

const flattenTokens = (tokens: DesignTokens, scope: string[] = []): TokenEntry[] => {
  return Object.entries(tokens).flatMap(([key, node]) => {
    const currentPath = [...scope, key]

    // Case 1: It is a valid token
    if (isTokenValue(node)) {
      const { $extensions, $type, $value } = node
      const normalizedValue = typeof $value === 'string' ? $value : JSON.stringify($value)

      return [
        {
          path: `--${currentPath.join('-')}`,
          type: $type ?? $extensions?.['amsterdam.designsystem.type'],
          value: normalizedValue,
        },
      ]
    }

    // Case 2: It is a nested group of tokens
    if (typeof node === 'object' && node !== null && !Array.isArray(node)) {
      return flattenTokens(node as DesignTokens, currentPath)
    }

    // Case 3: Invalid or empty group
    return []
  })
}

type DesignTokensTableRowProps = {
  name: string
  type?: string
  value: string
}

const DesignTokensTableRow = ({ name, type, value }: DesignTokensTableRowProps) => (
  <tr>
    <td>
      <Code>var({name})</Code>
    </td>
    <td>
      <Code>{value}</Code>
    </td>
    <td>
      {type === 'borderStyle' && <BorderSample borderStyle={value} />}
      {type === 'borderWidth' && <BorderSample borderWidth={value} />}
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
