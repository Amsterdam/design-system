/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Checkbox,
  Column,
  ErrorMessage,
  Field,
  Label,
  Paragraph,
  Radio,
  TextInput,
} from '@amsterdam/design-system-react'
import { FieldSet } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
  render: ({ hint, invalid, legend, optional }) => (
    <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-a1' : undefined}
          aria-required="true"
          id="input-a1"
          invalid={invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-a2' : undefined}
          aria-required="true"
          id="input-a2"
          invalid={invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-b" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-b">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b1">Voornaam</Label>
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
        <Label htmlFor="input-b2">Achternaam</Label>
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
  render: ({ hint, invalid, legend, optional }) => (
    <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b3">Voornaam</Label>
        {invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-b3' : undefined}
          aria-required="true"
          id="input-b3"
          invalid={invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-b4">Achternaam</Label>
        {invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-b4' : undefined}
          aria-required="true"
          id="input-b4"
          invalid={invalid}
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
        <Label htmlFor="input-c1">Voornaam</Label>
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
        <Label htmlFor="input-c2">Achternaam</Label>
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

export const RadioGroup: Story = {
  args: {
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      aria-describedby={`description-d${args.invalid ? ' error-d' : ''}`}
      aria-required="true"
      invalid={args.invalid}
      legend={args.legend}
      role="radiogroup"
    >
      <Paragraph className="ams-mb-s" id="description-d">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb-s" id="error-d">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Radio aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
  ),
}

export const RadioGroupWithValidation: Story = {
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      aria-describedby={`description-e${args.invalid ? ' error-e' : ''}`}
      aria-required="true"
      invalid={args.invalid}
      legend={args.legend}
      role="radiogroup"
    >
      <Paragraph className="ams-mb-s" id="description-e">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb-s" id="error-e">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Radio aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
  ),
}

export const CheckboxGroup: Story = {
  args: {
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      aria-labelledby={`fieldset-f description-f${args.invalid ? ' error-f' : ''}`}
      id="fieldset-f"
      invalid={args.invalid}
      legend={args.legend}
    >
      <Paragraph className="ams-mb-s" id="description-f">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb-s" id="error-f">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}

export const CheckboxGroupWithValidation: Story = {
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      aria-labelledby={`fieldset-g description-g${args.invalid ? ' error-g' : ''}`}
      id="fieldset-g"
      invalid={args.invalid}
      legend={args.legend}
    >
      <Paragraph className="ams-mb-s" id="description-g">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb-s" id="error-g">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}

export const WithHeadingInLegend: Story = {
  args: {
    legendIsPageHeading: true,
  },
  render: ({ hint, invalid, legend, legendIsPageHeading, optional }) => (
    <FieldSet
      hint={hint}
      invalid={invalid}
      legend={legend}
      legendIsPageHeading={legendIsPageHeading}
      optional={optional}
    >
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-a1' : undefined}
          aria-required="true"
          id="input-a1"
          invalid={invalid}
          value={givenName}
        />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-a2' : undefined}
          aria-required="true"
          id="input-a2"
          invalid={invalid}
          value={familyName}
        />
      </Field>
    </FieldSet>
  ),
}
