import './design-tokens-table.css'
import { Code } from './Code'
import { ColorSample } from './ColorSample'
import { SpacingSample } from './SpacingSample'

type TokenValue = {
  $extensions?: {
    'ams.type'?: string
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

const flattenTokens = (tokens: DesignTokens, parentPath: string[] = []): TokenEntry[] => {
  return Object.entries(tokens).flatMap(([key, value]) => {
    const currentToken = [...parentPath, key]

    if (isTokenValue(value)) {
      const type = value.$type || value.$extensions?.['ams.type']
      return [{ path: '--' + currentToken.join('-'), type, value: value.$value }]
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return flattenTokens(value as DesignTokens, currentToken)
    }

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
      {type === 'color' && value !== 'currentColor' && <ColorSample color={value} />}
      {(type === 'spacing' || type === 'gap' || type?.includes('padding') || type?.includes('offset')) && (
        <SpacingSample spacing={value} />
      )}
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
