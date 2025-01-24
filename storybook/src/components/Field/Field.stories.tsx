/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Label, Paragraph, TextInput } from '@amsterdam/design-system-react'
import { Field } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Field',
  component: Field,
  args: {
    invalid: false,
  },
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" invalid={args.invalid} />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} />
    </Field>
  ),
}

export const WithValidation: Story = {
  args: { invalid: true },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input3">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <ErrorMessage id="error">Geef aan waar het om gaat.</ErrorMessage>
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} />
    </Field>
  ),
}
