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
import { Meta, StoryObj } from '@storybook/react'

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
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          id="input-a1"
          aria-describedby={invalid ? 'error-a1' : undefined}
          aria-required="true"
          invalid={invalid}
        />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          id="input-a2"
          aria-describedby={invalid ? 'error-a2' : undefined}
          aria-required="true"
          invalid={invalid}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-b" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-b" className="ams-mb--sm" size="small">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          id="input-b1"
          aria-describedby={args.invalid ? 'error-b1' : undefined}
          aria-required="true"
          invalid={args.invalid}
        />
      </Field>
      <Field>
        <Label htmlFor="input-b2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          id="input-b2"
          aria-describedby={args.invalid ? 'error-b2' : undefined}
          aria-required="true"
          invalid={args.invalid}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithHint: Story = {
  args: { hint: 'verplicht', optional: false },
  render: ({ hint, invalid, legend, optional }) => (
    <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b3">Voornaam</Label>
        {invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          id="input-b3"
          aria-describedby={invalid ? 'error-b3' : undefined}
          aria-required="true"
          invalid={invalid}
        />
      </Field>
      <Field>
        <Label htmlFor="input-b4">Achternaam</Label>
        {invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          id="input-b4"
          aria-describedby={invalid ? 'error-b4' : undefined}
          aria-required="true"
          invalid={invalid}
        />
      </Field>
    </FieldSet>
  ),
}

export const WithValidation: Story = {
  args: { invalid: true },
  render: (args) => (
    <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-c" className="ams-mb--sm" size="small">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-c1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          id="input-c1"
          aria-describedby={args.invalid ? 'error-c1' : undefined}
          aria-required="true"
          invalid={args.invalid}
        />
      </Field>
      <Field>
        <Label htmlFor="input-c2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput
          id="input-c2"
          aria-describedby={args.invalid ? 'error-c2' : undefined}
          aria-required="true"
          invalid={args.invalid}
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
      <Paragraph id="description-d" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage id="error-d" className="ams-mb--sm">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Radio name="about" aria-required="true" invalid={args.invalid} value="horeca">
          Horecabedrijf
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="evenement">
          Evenement
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="anders">
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
      <Paragraph id="description-e" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage id="error-e" className="ams-mb--sm">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Radio name="about" aria-required="true" invalid={args.invalid} value="horeca">
          Horecabedrijf
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="evenement">
          Evenement
        </Radio>
        <Radio name="about" aria-required="true" invalid={args.invalid} value="anders">
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
      id="fieldset-f"
      aria-labelledby={`fieldset-f description-f${args.invalid ? ' error-f' : ''}`}
      invalid={args.invalid}
      legend={args.legend}
    >
      <Paragraph id="description-f" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage id="error-f" className="ams-mb--sm">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="evenement">
          Evenement
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="anders">
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
      id="fieldset-g"
      aria-labelledby={`fieldset-g description-g${args.invalid ? ' error-g' : ''}`}
      invalid={args.invalid}
      legend={args.legend}
    >
      <Paragraph id="description-g" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage id="error-g" className="ams-mb--sm">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="evenement">
          Evenement
        </Checkbox>
        <Checkbox name="about" aria-required="true" invalid={args.invalid} value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}
