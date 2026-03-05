/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field, Label } from '@amsterdam/design-system-react'
import { RichText } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Rich Text',
  component: RichText,
  args: {
    'aria-label': 'Rijke tekst',
    defaultValue: '<p>Beschrijf uw melding.</p>',
  },
} satisfies Meta<typeof RichText>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InField: Story = {
  render: (args) => (
    <Field>
      <Label htmlFor="rich-text">Waar gaat het om?</Label>
      <RichText id="rich-text" {...args} />
    </Field>
  ),
}
