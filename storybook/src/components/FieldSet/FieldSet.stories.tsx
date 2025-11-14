/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Checkbox,
  Column,
  ErrorMessage,
  Field,
  Label,
  Paragraph,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
import { FieldSet } from '@amsterdam/design-system-react/src'

import { exampleFamilyName, exampleGivenName } from '../shared/exampleContent'

const familyName = exampleFamilyName()
const givenName = exampleGivenName()

const meta = {
  title: 'Components/Forms/Field Set',
  component: FieldSet,
  args: {
    hint: '',
    invalid: false,
    legend: 'Wat is uw naam?',
    optional: false,
  },
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FieldSet {...args}>
      <Field className="ams-mb-s">
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
      <Field>
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

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-b" {...args}>
      <Paragraph className="ams-mb-s" id="description-b">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-b1' : undefined}
          aria-required="true"
          id="input-b1"
          invalid={args.invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-b2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-b2' : undefined}
          aria-required="true"
          id="input-b2"
          invalid={args.invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithHint: Story = {
  args: {
    hint: 'verplicht',
    optional: false,
  },
  render: (args) => (
    <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b3" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-b3' : undefined}
          aria-required="true"
          id="input-b3"
          invalid={args.invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-b4" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-b4' : undefined}
          aria-required="true"
          id="input-b4"
          invalid={args.invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithValidation: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-c">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-c1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-c1' : undefined}
          aria-required="true"
          id="input-c1"
          invalid={args.invalid}
          value=""
        />
      </Field>
      <Field>
        <Label htmlFor="input-c2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-c2' : undefined}
          aria-required="true"
          id="input-c2"
          invalid={args.invalid}
          value=""
        />
      </Field>
    </FieldSet>
  ),
}

export const WithHeadingInLegend: Story = {
  args: {
    legendIsPageHeading: true,
  },
  render: (args) => (
    <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-h1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-h1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-h1' : undefined}
          aria-required="true"
          id="input-h1"
          invalid={args.invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-h2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-h2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-h2' : undefined}
          aria-required="true"
          id="input-h2"
          invalid={args.invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithANestedFieldSet: Story = {
  args: {
    legend: 'Contact',
  },
  render: (args) => (
    <FieldSet {...args}>
      <Field className="ams-mb-m">
        <Label htmlFor="input-i1" inFieldSet>
          Waarover wilt u contact opnemen?
        </Label>
        <TextArea cols={42} id="input-i1" invalid={args.invalid} />
      </Field>
      <FieldSet id="fieldset-i2" inFieldSet invalid={args.invalid} legend="Hoe wilt u benaderd worden?">
        <Column gap="x-small">
          <Checkbox invalid={args.invalid} name="preferred-contact" value="tel">
            Telefoon
          </Checkbox>
          <Checkbox invalid={args.invalid} name="preferred-contact" value="email">
            E-mail
          </Checkbox>
        </Column>
      </FieldSet>
    </FieldSet>
  ),
}
