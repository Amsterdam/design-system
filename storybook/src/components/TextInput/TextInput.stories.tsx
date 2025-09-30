/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { textInputTypes } from '@amsterdam/design-system-react/dist/TextInput/TextInput'
import { TextInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  args: {
    defaultValue: 'Amsterdam',
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
    size: {
      control: { min: 0, type: 'number' },
      description: 'The width, expressed in the average number of characters.',
    },
    type: {
      control: {
        labels: { undefined: 'text (default)' },
        type: 'radio',
      },
      options: [undefined, ...textInputTypes.filter((type) => type !== 'text')],
    },
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmailAddress: Story = {
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email',
  },
}

export const WebAddress: Story = {
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url',
  },
}

export const PhoneNumber: Story = {
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel',
  },
}

export const WholeNumber: Story = {
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false,
  },
}

export const DecimalNumber: Story = {
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false,
  },
}

export const Size: Story = {
  args: {
    defaultValue: '1011 PN',
    size: 7,
  },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true,
  },
}

export const InAField: Story = {
  args: {
    defaultValue: '',
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
    </Field>
  ),
}

export const InAFieldWithValidation: Story = {
  args: {
    defaultValue: '',
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
