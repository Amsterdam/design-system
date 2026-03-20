/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorSample } from './ColorSample'

const meta = {
  title: 'Components/Docs/Color Sample',
} satisfies Meta<typeof ColorSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <ColorSample value="hotpink" />
      <ColorSample value="" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
