/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextInput } from '@amsterdam/design-system-react'
import { Field, Label, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Field',
  component: Field,
  args: {
    hasError: false,
  },
  render: (args) => (
    <Field hasError={args.hasError}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input1" aria-describedby="description1" aria-invalid={args.hasError ? true : undefined} />
    </Field>
  ),
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: { hasError: true },
  render: (args) => (
    <Field hasError={args.hasError}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input2" aria-describedby="description2" aria-invalid={args.hasError ? true : undefined} />
    </Field>
  ),
}
