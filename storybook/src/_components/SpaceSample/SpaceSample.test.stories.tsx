/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpaceSample } from './SpaceSample'

const meta = {
  title: 'Components/Docs/Space Sample',
} satisfies Meta<typeof SpaceSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <SpaceSample value="16px" />
      <SpaceSample />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
