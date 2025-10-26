/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup } from '@amsterdam/design-system-react/src'

import { default as actionGroupMeta } from './ActionGroup.stories'

const meta = {
  ...actionGroupMeta,
  title: 'Components/Layout/Action Group',
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <ActionGroup>
        <button>Stoppen</button>
        <button>Verder</button>
      </ActionGroup>
      <ActionGroup
        {...args}
        className="ams-resize-horizontal"
        style={{
          inlineSize: '16rem',
        }}
      >
        <button>Stoppen</button>
        <button>Verder</button>
      </ActionGroup>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
