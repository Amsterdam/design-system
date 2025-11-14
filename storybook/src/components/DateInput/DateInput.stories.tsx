/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column, ErrorMessage, Field, FieldSet, Label, Paragraph, Row, TextInput } from '@amsterdam/design-system-react'
import { DateInput } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Date Input',
  component: DateInput,
  args: {
    disabled: false,
    invalid: false,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
  },
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DateTime: Story = {
  args: {
    type: 'datetime-local',
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
      <DateInput aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
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
      <DateInput aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}

export const MemorableDate: Story = {
  render: () => (
    <FieldSet aria-describedby="description-a" legend="Wanneer ben je geboren?">
      <Paragraph className="ams-mb-s" id="description-a">
        Bijvoorbeeld 1 1 2000.
      </Paragraph>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-a1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-a1" inputMode="numeric" name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-a2" inputMode="numeric" name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-a3" inputMode="numeric" name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
  ),
}

export const MemorableDateWithValidation: Story = {
  render: () => (
    <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph className="ams-mb-s" id="description-b">
        Bijvoorbeeld 1 1 2000.
      </Paragraph>
      <ErrorMessage className="ams-mb-s" id="error-b">
        De datum moet in het verleden liggen.
      </ErrorMessage>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-b1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-b1" inputMode="numeric" invalid name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-b2" inputMode="numeric" invalid name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
  ),
}
