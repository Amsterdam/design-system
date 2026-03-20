/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { BorderSample } from '../BorderSample/BorderSample'
import { Code } from '../Code/Code'
import { ColorSample } from '../ColorSample/ColorSample'
import { SpaceSample } from '../SpaceSample/SpaceSample'
import { TypographySample } from '../TypographySample/TypographySample'

type DesignTokensTableRowProps = {
  name: string
  type?: string
  value: string
}

/**
 * Renders a single row in the design tokens table.
 * The `type` prop controls which sample component appears in the Example column:
 * `borderStyle` / `borderWidth` → `BorderSample`, `color` → `ColorSample`,
 * `fontFamily` / `fontSize` / `fontWeight` / `lineHeight` → `TypographySample`, `space` → `SpaceSample`.
 * Rows with an unrecognised or absent `type` show no example.
 */
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
