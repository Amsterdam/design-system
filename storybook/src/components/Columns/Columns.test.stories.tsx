/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Columns } from '@amsterdam/design-system-react/src'
import { columnsCounts } from '@amsterdam/design-system-react/src/Columns/Columns'

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

const list = (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export const Test: Story = {
  render: (args) => (
    <div className="_ams-tests-stack">
      <Columns {...args}>{list}</Columns>
      {columnsCounts.map((count) => (
        <Columns {...args} count={count} key={count}>
          {list}
        </Columns>
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
