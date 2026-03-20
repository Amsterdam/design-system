/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DesignTokensTable } from './DesignTokensTable'

const meta = {
  title: 'Components/Docs/Design Tokens Table',
} satisfies Meta<typeof DesignTokensTable>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <DesignTokensTable
      tokens={{
        // Nested group
        border: {
          style: { $type: 'borderStyle', $value: 'solid' },
          width: { $type: 'borderWidth', $value: '2px' },
        },
        // Nested group
        color: {
          primary: { $type: 'color', $value: '#009de6' },
          // currentColor is explicitly excluded from rendering a colour swatch
          text: { $type: 'color', $value: 'currentColor' },
        },
        // Type resolved via $extensions (lowest precedence)
        extended: { $extensions: { 'nl.amsterdam.type': 'color' }, $value: '#ec0000' },
        // No type — renders no sample
        plain: { $value: 'value' },
        // Composite $value (normalised to e.g. "1rem")
        space: { $type: 'space', $value: { unit: 'rem', value: 1 } },
        // $extensions subtype overrides $type
        subTyped: { $extensions: { 'nl.amsterdam.subtype': 'borderStyle' }, $type: 'space', $value: 'dashed' },
        typography: {
          family: { $type: 'fontFamily', $value: 'arial' },
          leading: { $type: 'lineHeight', $value: '1.5' },
          size: { $type: 'fontSize', $value: '1rem' },
          weight: { $type: 'fontWeight', $value: '700' },
        },
      }}
    />
  ),
  tags: ['!dev', '!autodocs'],
}
