/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { BorderSample } from './BorderSample'
import { Code } from './Code'
import { ColorSample } from './ColorSample'
import { SpaceSample } from './SpaceSample'
import { TypographySample } from './TypographySample'

type DesignTokensTableRowProps = {
  name: string
  type?: string
  value: string
}

export const DesignTokensTableRow = ({ name, type, value }: DesignTokensTableRowProps) => (
  <tr>
    <td>
      <Code>var({name})</Code>
    </td>
    <td>
      <Code>{value}</Code>
    </td>
    <td>
      {type === 'borderStyle' && <BorderSample style={value} />}
      {type === 'borderWidth' && <BorderSample width={value} />}
      {type === 'color' && value !== 'currentColor' && <ColorSample value={value} />}
      {type === 'fontFamily' && <TypographySample fontFamily={value} />}
      {type === 'fontSize' && <TypographySample fontSize={value} />}
      {type === 'fontWeight' && <TypographySample fontWeight={value} />}
      {type === 'lineHeight' && <TypographySample lineHeight={value} />}
      {type === 'space' && <SpaceSample value={value} />}
    </td>
  </tr>
)

DesignTokensTableRow.displayName = 'DesignTokensTable.Row'
