/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldDescription, FormLabel, TextArea, TextInput } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Field Description',
  component: FormFieldDescription,
  args: {
    children: 'Hint text',
  },
} satisfies Meta<typeof FormFieldDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AboveFormField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
      <FormLabel htmlFor="about" aria-describedby="aboutDescription">
        Waar gaat het om?
      </FormLabel>
      <FormFieldDescription id="aboutDescription">
        Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd
      </FormFieldDescription>
      <TextArea id="about" />
    </div>
  ),
}

export const BelowFormField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
      <FormLabel htmlFor="username" aria-describedby="usernameDescription">
        Kies een gebruikersnaam
      </FormLabel>
      <TextInput id="username" />
      <FormFieldDescription id="usernameDescription">
        <p>Toegestane tekens</p>
        <ul>
          <li>A - Z</li>
          <li>a - z</li>
          <li>0 - 9</li>
          <li>&apos; . - _ ! # ^ ~</li>
        </ul>
      </FormFieldDescription>
    </div>
  ),
}
