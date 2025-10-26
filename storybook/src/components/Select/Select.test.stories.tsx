/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@amsterdam/design-system-react/src'

import { default as selectMeta } from './Select.stories'

const meta = {
  ...selectMeta,
  title: 'Components/Forms/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <Select {...args} />
      <Select {...args} className="hover" />
      <Select {...args} invalid />
      <Select {...args} className="hover" invalid />
      <Select {...args} disabled />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
