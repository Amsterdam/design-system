/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { FileInput } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/File Input',
  component: FileInput,
  args: {
    accept: undefined,
    disabled: false,
    multiple: false,
  },
  argTypes: {
    accept: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
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

export const MultipleFiles: Story = {
  args: {
    multiple: true,
  },
}

export const RestrictFileTypes: Story = {
  args: {
    accept: 'application/pdf',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const InAField: Story = {
  render: (args) => (
    <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
  ),
}
