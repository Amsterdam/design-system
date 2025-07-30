/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { textInputTypes } from '@amsterdam/design-system-react/dist/TextInput/TextInput'
import { TextInput } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  args: {
    disabled: false,
    invalid: false,
    value: 'Amsterdam',
  },
  argTypes: {
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
      },
      options: [undefined, ...textInputTypes.filter((type) => type !== 'text')],
    },
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: event.target.value })
    }

    return <TextInput onChange={handleChange} {...args} />
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmailAddress: Story = {
  args: {
    size: 32,
    type: 'email',
    value: 'designsystem@amsterdam.nl',
  },
}

export const WebAddress: Story = {
  args: {
    size: 48,
    type: 'url',
    value: 'https://designsystem.amsterdam/',
  },
}

export const PhoneNumber: Story = {
  args: {
    size: 16,
    type: 'tel',
    value: '14020',
  },
}

export const WholeNumber: Story = {
  args: {
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false,
    value: '20',
  },
}

export const DecimalNumber: Story = {
  args: {
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false,
    value: '12.75',
  },
}

export const Size: Story = {
  args: {
    size: 8,
    value: '1011 PN',
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'bijv. 06-12345678',
    size: 16,
    value: '',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    value: 'Deze waarde is ongeldig',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Deze waarde kan niet veranderd worden',
  },
}

export const InAField: Story = {
  args: {
    value: '',
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: event.target.value })
    }

    return (
      <Field invalid={args.invalid}>
        <Label htmlFor="input1">Label</Label>
        <Paragraph id="description1" size="small">
          Omschrijving.
        </Paragraph>
        {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
        <TextInput
          aria-describedby={`description1${args.invalid ? ' error1' : ''}`}
          id="input1"
          onChange={handleChange}
          {...args}
        />
      </Field>
    )
  },
}

export const InAFieldWithValidation: Story = {
  args: {
    invalid: true,
    value: '',
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: event.target.value })
    }

    return (
      <Field invalid={args.invalid}>
        <Label htmlFor="input2">Label</Label>
        <Paragraph id="description2" size="small">
          Omschrijving.
        </Paragraph>
        {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
        <TextInput
          aria-describedby={`description2${args.invalid ? ' error2' : ''}`}
          id="input2"
          onChange={handleChange}
          {...args}
        />
      </Field>
    )
  },
}
