/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
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

export const InAField: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
    </Field>
  ),
}

export const InAnInvalidField: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
