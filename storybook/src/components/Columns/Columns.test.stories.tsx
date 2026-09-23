/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Columns } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as columnsMeta } from './Columns.stories'

const meta = {
  ...columnsMeta,
  title: 'Components/Layout/Columns',
} satisfies Meta<typeof Columns>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  'Afval',
  'Bestuur en organisatie',
  'Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en ruimte voor scheidsrechters en EHBO',
  'Burgerzaken',
  'Leefomgeving',
  'Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine',
  'Ondernemen',
  'Parkeren',
  'Wonen, bouwen en verbouwen',
]

export const Test: Story = {
  args: {
    children: (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  tags: ['!dev', '!autodocs', '!manifest'],
}
