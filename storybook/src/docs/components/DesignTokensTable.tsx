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
  token: string
  value: string
}

const DesignTokensTableRow = ({ token, value }: DesignTokensTableRowProps) => (
  <tr>
    <td>{token}</td>
    <td>{value}</td>
  </tr>
)

DesignTokensTableRow.displayName = 'DesignTokensTable.Row'

const DesignTokensTableRoot = ({ tokens }: IDesignTokensTable) => {
  const flatTokens = flattenTokens(tokens)

  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {flatTokens.map(({ path, value }) => (
          <DesignTokensTableRow key={path} token={path} value={value} />
        ))}
      </tbody>
    </table>
  )
}

DesignTokensTableRoot.displayName = 'DesignTokensTable'

export const DesignTokensTable = Object.assign(DesignTokensTableRoot, {
  Row: DesignTokensTableRow,
})
