/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Checkbox, Column, FieldSet, Label, Paragraph, Radio, TextInput } from '@amsterdam/design-system-react/src'
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
      <Column gap="extra-small" style={{ width: '100%' }}>
        <Label htmlFor="input1">Voornaam</Label>
        <TextInput id="input1" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
        <Label htmlFor="input2">Achternaam</Label>
        <TextInput id="input2" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
      </Column>
    </FieldSet>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description2">
      <Paragraph id="description2" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input3">Voornaam</Label>
        <TextInput id="input3" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
        <Label htmlFor="input4">Achternaam</Label>
        <TextInput id="input4" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
      </Column>
    </FieldSet>
  ),
}

export const WithError: Story = {
  args: { invalid: true },
  render: (args) => (
    <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description3">
      <Paragraph id="description3" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input5">Voornaam</Label>
        <TextInput id="input5" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
        <Label htmlFor="input6">Achternaam</Label>
        <TextInput id="input6" aria-invalid={args.invalid ? true : undefined} aria-required="true" />
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
      aria-describedby="description4"
      role="radiogroup"
      aria-required="true"
      invalid={args.invalid}
    >
      <Paragraph id="description4" size="small" className="ams-mb--sm">
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

export const CheckboxGroup: Story = {
  args: {
    legend: 'Waar gaat uw melding over?',
  },
  render: (args) => (
    <FieldSet legend={args.legend} invalid={args.invalid}>
      <Column gap="extra-small" style={{ width: '100%' }}>
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
