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

export const Password: Story = {
  args: {
    minLength: 8,
    type: 'password',
    value: 'password',
  },
}

export const EmailAddress: Story = {
  args: {
    type: 'email',
    value: 'designsystem@amsterdam.nl',
  },
}

export const WebAddress: Story = {
  args: {
    type: 'url',
    value: 'https://designsystem.amsterdam/',
  },
}

export const PhoneNumber: Story = {
  args: {
    type: 'tel',
    value: '14020',
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    value: 'Invalid value',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
  },
}
