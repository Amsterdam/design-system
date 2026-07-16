/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column } from '@amsterdam/design-system-react'
import {
  CharacterCount,
  formatCharacterCountTextAr,
  formatCharacterCountTextDe,
  formatCharacterCountTextEn,
  formatCharacterCountTextFr,
  formatCharacterCountTextNl,
  formatCharacterCountTextTr,
} from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Character Count',
  component: CharacterCount,
  args: {
    length: 7,
    maxLength: 10,
  },
  argTypes: {
    formatText: {
      control: false,
    },
    length: {
      control: { min: 0, type: 'number' },
    },
    maxLength: {
      control: { min: 0, type: 'number' },
    },
  },
} satisfies Meta<typeof CharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    length: 1001,
    maxLength: 1000,
  },
}

export const Translated: Story = {
  render: (args) => (
    <Column>
      <CharacterCount {...args} dir="rtl" formatText={formatCharacterCountTextAr} lang="ar" />
      <CharacterCount {...args} formatText={formatCharacterCountTextDe} lang="de" />
      <CharacterCount {...args} formatText={formatCharacterCountTextEn} lang="en" />
      <CharacterCount {...args} formatText={formatCharacterCountTextFr} lang="fr" />
      <CharacterCount {...args} formatText={formatCharacterCountTextNl} lang="nl" />
      <CharacterCount {...args} formatText={formatCharacterCountTextTr} lang="tr" />
    </Column>
  ),
}
