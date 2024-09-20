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
    invalid: false,
    legend: 'Wat is uw naam?',
    optional: false,
    hint: '',
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
  render: ({ invalid, legend, hint, optional }) => (
    <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-a1' : undefined}
          aria-required="true"
          id="input-a1"
          invalid={invalid}
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
        />
      </Field>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-b" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-b" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-b1' : undefined}
          aria-required="true"
          id="input-b1"
          invalid={args.invalid}
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
        />
      </Field>
    </FieldSet>
  ),
}

export const WithHint: Story = {
  args: { optional: false, hint: 'verplicht' },
  render: ({ invalid, legend, hint, optional }) => (
    <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b3">Voornaam</Label>
        {invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={invalid ? 'error-b3' : undefined}
          aria-required="true"
          id="input-b3"
          invalid={invalid}
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
        />
      </Field>
    </FieldSet>
  ),
}

export const WithValidation: Story = {
  args: { invalid: true },
  render: (args) => (
    <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-c" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-c1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput
          aria-describedby={args.invalid ? 'error-c1' : undefined}
          aria-required="true"
          id="input-c1"
          invalid={args.invalid}
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
      <Paragraph className="ams-mb--sm" id="description-d" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb--sm" id="error-d">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
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
    legend: 'Waar gaat uw melding over?',
    invalid: true,
  },
  render: (args) => (
    <FieldSet
      aria-describedby={`description-e${args.invalid ? ' error-e' : ''}`}
      aria-required="true"
      invalid={args.invalid}
      legend={args.legend}
      role="radiogroup"
    >
      <Paragraph className="ams-mb--sm" id="description-e" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb--sm" id="error-e">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
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
      <Paragraph className="ams-mb--sm" id="description-f" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb--sm" id="error-f">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
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
      <Paragraph id="description-g" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb--sm" id="error-g">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
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
