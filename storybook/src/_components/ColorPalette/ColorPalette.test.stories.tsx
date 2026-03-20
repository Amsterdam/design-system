/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorPalette } from './ColorPalette'

const meta = {
  title: 'Components/Docs/Color Palette',
} satisfies Meta<typeof ColorPalette>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <ColorPalette>
      <ColorPalette.Swatch name="azure">
        <ColorPalette.Tile color="#009de6" level="100" />
        <ColorPalette.Tile color="#66c7f4" level="60" />
        <ColorPalette.Tile color="" level="20" />
      </ColorPalette.Swatch>
      <ColorPalette.Swatch name="red">
        <ColorPalette.Tile color="#ec0000" level="100" />
      </ColorPalette.Swatch>
    </ColorPalette>
  ),
  tags: ['!dev', '!autodocs'],
}
