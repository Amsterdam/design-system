/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatusBadge } from './StatusBadge'

const meta = {
  title: 'Components/Docs/Status Badge',
} satisfies Meta<typeof StatusBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-l)' }}>
      <StatusBadge description="This component is still in development and its API may change." status="beta" />
      <StatusBadge description="Use the Alert component instead." status="deprecated" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
