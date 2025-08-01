/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { textInputTypes } from '@amsterdam/design-system-react/dist/TextInput/TextInput'
import { TextInput } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Decorator, Meta, StoryObj } from '@storybook/react'
import type { ChangeEvent, ComponentProps } from 'react'

const withControlledInput: Decorator = (Story, { args }: { args: any }) => {
  const [, setArgs] = useArgs()

  const value = args._value || ''

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArgs({ _value: event.target.value })
  }

  return <Story args={{ ...args, _value: value, defaultValue: value, onChange: handleChange }} />
}

type MetaWithUnderscoreValue = ComponentProps<typeof TextInput> & { _value?: string }

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  args: {
    _value: 'Amsterdam',
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
  decorators: [withControlledInput],
} satisfies Meta<MetaWithUnderscoreValue>

export default meta

type Story = StoryObj<Meta<MetaWithUnderscoreValue>>

export const Default: Story = {}

export const EmailAddress: Story = {
  args: {
    _value: 'designsystem@amsterdam.nl',
    size: 32,
    type: 'email',
  },
}

export const WebAddress: Story = {
  args: {
    _value: 'https://designsystem.amsterdam/',
    size: 48,
    type: 'url',
  },
}

export const PhoneNumber: Story = {
  args: {
    _value: '14020',
    size: 16,
    type: 'tel',
  },
}

export const WholeNumber: Story = {
  args: {
    _value: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false,
  },
}

export const DecimalNumber: Story = {
  args: {
    _value: '12.75',
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false,
  },
}

export const Size: Story = {
  args: {
    _value: '1011 PN',
    size: 8,
  },
}

export const Placeholder: Story = {
  args: {
    _value: '',
    placeholder: 'bijv. 06-12345678',
    size: 16,
  },
}

export const Invalid: Story = {
  args: {
    _value: 'Deze waarde is ongeldig',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    _value: 'Deze waarde kan niet veranderd worden',
    disabled: true,
  },
}

export const InAField: Story = {
  args: {
    _value: '',
  },
  render: (args) => (
    <Field invalid={args['invalid']}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args['invalid'] && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description1${args['invalid'] ? ' error1' : ''}`} id="input1" {...args} />
    </Field>
  ),
}

export const InAFieldWithValidation: Story = {
  args: {
    _value: '',
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args['invalid']}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args['invalid'] && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={`description2${args['invalid'] ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
