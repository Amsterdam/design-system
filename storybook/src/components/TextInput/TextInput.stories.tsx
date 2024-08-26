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
    defaultValue: {
      table: { disable: true },
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    invalid: {
      description: 'Whether the value fails a validation rule.',
    },
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmailAddress: Story = {
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email',
  },
}

export const WebAddress: Story = {
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url',
  },
}

export const PhoneNumber: Story = {
  args: {
    defaultValue: '14020',
    type: 'tel',
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'Invalid value',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled input',
    disabled: true,
  },
}
