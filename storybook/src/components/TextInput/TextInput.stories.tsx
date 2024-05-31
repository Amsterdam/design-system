/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  args: {
    disabled: false,
    invalid: false,
    value: '',
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    invalid: {
      description: 'Whether the value fails a validation rule.',
    },
    value: {
      description: 'The value of the field.',
    },
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    placeholder: 'E-mail',
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
