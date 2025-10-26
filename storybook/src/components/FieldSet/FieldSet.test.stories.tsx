/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldSet } from '@amsterdam/design-system-react/src'

import { default as fieldSetMeta } from './FieldSet.stories'

const meta = {
  ...fieldSetMeta,
  title: 'Components/Forms/Field Set',
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: (
      <div>
        <label htmlFor="input-a1">Voornaam</label>
        <input aria-required="true" id="input-a1" value="Yassine" />
      </div>
    ),
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <FieldSet {...args} />
      <FieldSet {...args} invalid />
      <FieldSet {...args} optional />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
