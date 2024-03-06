/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormLabel, Switch } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
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
  },
}

export const WithLabel: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      <FormLabel htmlFor="switch-with-label">Label</FormLabel>
      <Switch {...args} id="switch-with-label" />
    </>
  ),
}
