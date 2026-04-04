/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react'
import { WarningIcon } from '@amsterdam/design-system-react-icons'

import { AspectRatioSample } from '../AspectRatioSample/AspectRatioSample'
import { BorderSample } from '../BorderSample/BorderSample'
import { Code } from '../Code/Code'
import { ColorSample } from '../ColorSample/ColorSample'
import { ShadowSample } from '../ShadowSample/ShadowSample'
import { SpaceSample } from '../SpaceSample/SpaceSample'
import { TypographySample } from '../TypographySample/TypographySample'

type DesignTokensTableRowProps = {
  deprecated?: string
  description?: string
  name: string
  type?: string
  value: string
}

/**
 * Renders a single row in the design tokens table.
 * The `type` prop controls which sample component appears in the Example column:
 * `aspectRatio` → `AspectRatioSample`, `borderStyle` / `borderWidth` → `BorderSample`, `color` → `ColorSample`,
 * `fontFamily` / `fontSize` / `fontWeight` / `lineHeight` → `TypographySample`, `space` → `SpaceSample`.
 * Rows with an unrecognised or absent `type` show no example.
 * Deprecated tokens show a yellow warning icon with the deprecation message as a tooltip.
 */
export const DesignTokensTableRow = ({ deprecated, description, name, type, value }: DesignTokensTableRowProps) => (
  <tr>
    <td>
      <Code>var({name})</Code>
      {deprecated && (
        <Icon className="_ams-design-tokens-table__deprecated-icon" svg={WarningIcon} title={deprecated} />
      )}
    </td>
    <td>
      <Code>{value}</Code>
    </td>
    {description !== undefined && <td>{description}</td>}
    <td>
      {type === 'aspectRatio' && <AspectRatioSample value={value} />}
      {type === 'borderStyle' && <BorderSample lineStyle={value} />}
      {type === 'borderWidth' && <BorderSample width={value} />}
      {type === 'color' && <ColorSample value={value} />}
      {type === 'fontFamily' && <TypographySample fontFamily={value} />}
      {type === 'fontSize' && <TypographySample fontSize={value} />}
      {type === 'fontWeight' && <TypographySample fontWeight={value} />}
      {type === 'lineHeight' && <TypographySample lineHeight={value} />}
      {type === 'shadow' && <ShadowSample value={value} />}
      {type === 'space' && <SpaceSample value={value} />}
    </td>
  </tr>
)

DesignTokensTableRow.displayName = 'DesignTokensTable.Row'
