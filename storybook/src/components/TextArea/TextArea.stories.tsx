/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorMessage, Field, Label, Paragraph } from '@amsterdam/design-system-react'
import { TextArea } from '@amsterdam/design-system-react/src'

import { disabledArgType } from '#storybook/_common/argTypes'
import { exampleParagraph } from '#storybook/_common/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Forms/Text Area',
  component: TextArea,
  args: {
    defaultValue: paragraph,
    disabled: false,
    invalid: false,
  },
  argTypes: {
    cols: {
      control: { min: 1, type: 'number' },
      description: 'The width, expressed in the average number of characters.',
    },
    defaultValue: {
      table: { disable: false },
    },
    disabled: disabledArgType,
    onChange: {
      table: { disable: false },
    },
    resize: {
      control: {
        labels: { undefined: 'both (default)' },
        type: 'radio',
      },
      options: [undefined, 'none', 'horizontal', 'vertical'],
    },
    rows: {
      control: { min: 1, type: 'number' },
      description: 'The number of lines to show.',
    },
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const VerticalResize: Story = {
  args: {
    resize: 'vertical',
  },
}

export const HorizontalResize: Story = {
  args: {
    resize: 'horizontal',
  },
}

export const NoResize: Story = {
  args: {
    resize: 'none',
  },
}

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
      <TextArea aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
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
      <TextArea aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
