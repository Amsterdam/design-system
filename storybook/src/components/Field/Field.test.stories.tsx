/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field } from '@amsterdam/design-system-react/src'

import { default as fieldMeta } from './Field.stories'

const meta = {
  ...fieldMeta,
  title: 'Components/Forms/Field',
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <Field {...args}>
        <label htmlFor="input1">Wat is uw achternaam?</label>
        <input id="input1" value="Dijkstra" />
      </Field>
      <Field {...args} invalid>
        <label htmlFor="input2">Wat is uw achternaam?</label>
        <input id="input2" value="Dijkstra" />
      </Field>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
