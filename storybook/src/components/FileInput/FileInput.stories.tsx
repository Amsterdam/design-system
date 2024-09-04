/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { FileInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/File Input',
  component: FileInput,
  args: {
    accept: undefined,
    multiple: false,
    disabled: false,
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
    disabled: {
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
  args: { accept: 'application/pdf' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const InAField: Story = {
  render: (args) => (
    <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
  ),
}
