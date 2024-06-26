/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Checkbox,
  Column,
  ErrorMessage,
  FieldSet,
  Label,
  Paragraph,
  Radio,
  TextInput,
} from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Field Set',
  component: FieldSet,
  args: {
    invalid: false,
    legend: 'Wat is uw naam?',
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
    <FieldSet invalid={args.invalid} legend={args.legend}>
      <Column gap="extra-small">
        <Label htmlFor="input-a1">Voornaam</Label>
        <TextInput id="input-a1" invalid={args.invalid} aria-required="true" />
        <Label htmlFor="input-a2">Achternaam</Label>
        <TextInput id="input-a2" invalid={args.invalid} aria-required="true" />
      </Column>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description-b">
      <Paragraph id="description-b" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input-b1">Voornaam</Label>
        <TextInput id="input-b1" invalid={args.invalid} aria-required="true" />
        <Label htmlFor="input-b2">Achternaam</Label>
        <TextInput id="input-b2" invalid={args.invalid} aria-required="true" />
      </Column>
    </FieldSet>
  ),
}

export const WithError: Story = {
  args: { invalid: true },
  render: (args) => (
    <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description-c">
      <Paragraph id="description-c" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input-c1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput id="input-c1" aria-describedby="error-c1" aria-required="true" invalid={args.invalid} />
        <Label htmlFor="input-c2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput id="input-c2" aria-describedby="error-c2" aria-required="true" invalid={args.invalid} />
      </Column>
    </FieldSet>
  ),
}

export const RadioGroup: Story = {
  args: {
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      legend={args.legend}
      aria-describedby="description-d"
      role="radiogroup"
      aria-required="true"
      invalid={args.invalid}
    >
      <Paragraph id="description-d" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      <Column gap="extra-small">
        <Radio name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Radio>
        <Radio name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Radio>
        <Radio name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
  ),
}

export const RadioGroupWithError: Story = {
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true,
  },
  render: (args) => (
    <FieldSet
      legend={args.legend}
      aria-describedby="description-e error-e"
      role="radiogroup"
      aria-required="true"
      invalid={args.invalid}
    >
      <Paragraph id="description-e" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && (
        <ErrorMessage className="ams-mb--sm" id="error-e">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Radio name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Radio>
        <Radio name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Radio>
        <Radio name="about" value="anders" invalid={args.invalid} aria-required="true">
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
    <FieldSet aria-labelledby="fieldset-f description-f" id="fieldset-f" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-f" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      <Column gap="extra-small">
        <Checkbox name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Checkbox>
        <Checkbox name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}

export const CheckboxGroupWithError: Story = {
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet
      aria-labelledby="fieldset-g description-g error-g"
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
        <Checkbox name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Checkbox>
        <Checkbox name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}
