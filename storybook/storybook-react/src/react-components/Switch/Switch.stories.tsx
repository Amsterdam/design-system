/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { FormLabel, Switch } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Components/Forms/Switch',
  component: Switch,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Default',
    disabled: false,
  },
}

export const WithFormLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
      <FormLabel htmlFor="switch-with-label">Label</FormLabel>
      <Switch {...args} id="switch-with-label" />
    </div>
  ),
  args: {
    disabled: false,
  },
}
