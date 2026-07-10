/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { TimeInput } from '@amsterdam/design-system-react/src'

import { disabledArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Forms/Time Input',
  component: TimeInput,
  args: {
    disabled: false,
    invalid: false,
  },
  argTypes: {
    defaultValue: {
      table: { disable: false },
    },
    disabled: disabledArgType,
    onChange: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof TimeInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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

export const InAField: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
    </Field>
  ),
}

export const InAFieldWithValidation: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
