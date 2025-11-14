/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorMessage, FieldSet, Label, Paragraph, TextInput } from '@amsterdam/design-system-react'
import { Field } from '@amsterdam/design-system-react/src'

import { exampleFamilyName, exampleGivenName } from '../shared/exampleContent'

const givenName = exampleGivenName()
const familyName = exampleFamilyName()

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
      <Label htmlFor="input1">Wat is uw achternaam?</Label>
      <TextInput id="input1" invalid={args.invalid} value={familyName} />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Wat is uw achternaam?</Label>
      <Paragraph id="description1">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} value="van den Heuvel" />
    </Field>
  ),
}

export const WithValidation: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input3">Wat is uw achternaam?</Label>
      <Paragraph id="description2">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <ErrorMessage id="error">Vul uw achternaam in</ErrorMessage>
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} value="" />
    </Field>
  ),
}

export const InAFieldSet: Story = {
  render: (args) => (
    <FieldSet legend="Wat is uw naam?">
      <Field className="ams-mb-s" {...args}>
        <Label htmlFor="input-a1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-a1' : undefined}
          aria-required="true"
          id="input-a1"
          invalid={args.invalid}
          value={givenName}
        />
      </Field>
      <Field {...args}>
        <Label htmlFor="input-a2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-a2' : undefined}
          aria-required="true"
          id="input-a2"
          invalid={args.invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}
