/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DateInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Date Input',
  component: DateInput,
  args: {
    disabled: false,
    invalid: false,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
  },
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DateTime: Story = {
  args: {
    type: 'datetime-local',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
