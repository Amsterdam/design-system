/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldDescription, FormLabel, Paragraph, TextInput } from '@amsterdam/design-system-react'
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

export const WithFormField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
      <FormLabel htmlFor="about">Waar gaat het om?</FormLabel>
      <FormFieldDescription id="aboutDescription">
        <Paragraph size="small">Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd</Paragraph>
      </FormFieldDescription>
      <TextInput id="about" aria-describedby="aboutDescription" />
    </div>
  ),
}
