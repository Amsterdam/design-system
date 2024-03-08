/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  FormFieldDescription,
  FormLabel,
  Paragraph,
  TextArea,
  TextInput,
  UnorderedList,
} from '@amsterdam/design-system-react'
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
        <Paragraph size="small">Toegestane tekens</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>A - Z</UnorderedList.Item>
          <UnorderedList.Item>a - z</UnorderedList.Item>
          <UnorderedList.Item>0 - 9</UnorderedList.Item>
          <UnorderedList.Item>&apos; . - _ ! # ^ ~</UnorderedList.Item>
        </UnorderedList>
      </FormFieldDescription>
    </div>
  ),
}
