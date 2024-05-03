/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/File Input',
  component: FileInput,
  args: {
    accept: '',
    multiple: false,
  },
  argTypes: {
    accept: {
      control: {
        type: 'text',
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
  args: { multiple: true },
}

export const Accept: Story = {
  args: { accept: '.pdf' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
