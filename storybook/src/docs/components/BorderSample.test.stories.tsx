/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { BorderSample } from './BorderSample'

const meta = {
  title: 'Components/Docs/Border Sample',
} satisfies Meta<typeof BorderSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <BorderSample style="dashed" />
      <BorderSample width="4px" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
