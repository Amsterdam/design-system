/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DateInput, DateInputProps } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

type StoryProps = DateInputProps & { invalid?: boolean }

const meta = {
  title: 'Components/Forms/Date Input',
  component: DateInput,
  args: {
    disabled: false,
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
