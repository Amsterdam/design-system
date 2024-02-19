/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Checkbox, Fieldset } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Forms/Fieldset',
  component: Fieldset,
  args: {
    children: 'Body van de fieldset',
    legend: 'Label van de fieldset',
  },
} satisfies Meta<typeof Fieldset>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CheckboxGroup: Story = {
  args: {
    children: [
      <Checkbox key={1}>Horecabedrijf</Checkbox>,
      <Checkbox key={2}>Ander soort bedrijf</Checkbox>,
      <Checkbox key={3}>Evenement</Checkbox>,
      <Checkbox key={4}>Iets anders</Checkbox>,
    ],
    legend: 'Waar gaat uw melding over?',
  },
}
