import React from 'react'

import { Button, Label, SearchField, Select } from '@amsterdam/design-system-react'
import { EnlargeIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

import { OverviewFilter } from './OverviewFilter'
import { buurten } from '../../common/utils/buurten'

const defaultFilters = [
  <SearchField onSubmit={() => {}} key="search">
    <SearchField.Input />
    <SearchField.Button />
  </SearchField>,
  <Select onChange={() => {}} key="select">
    <Select.Option value="1">Optie 1</Select.Option>
    <Select.Option value="2">Optie 2</Select.Option>
    <Select.Option value="3">Optie 3</Select.Option>
    <Select.Option value="4">Optie met een lange naam</Select.Option>
  </Select>,
]

const defaultActions = [
  <Button variant="secondary" icon={EnlargeIcon} key="new">
    Nieuw item
  </Button>,
]

const autocompleteActions = [
  <Button variant="secondary" icon={EnlargeIcon} key="new">
    Melding toevoegen
  </Button>,
]

const meta = {
  title: 'Components/OverviewFilter',
  component: OverviewFilter,
  tags: ['autodocs'],
  args: {
    filters: defaultFilters,
    actions: defaultActions,
  },
} satisfies Meta<typeof OverviewFilter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filters: defaultFilters,
    actions: defaultActions,
  },
}

export const Autocomplete: Story = {
  args: {
    filters: [
      <SearchField onSubmit={() => {}} key="search">
        <SearchField.Input list="places" placeholder="Zoek op straat, postcode, bericht of SIA nummer" />
        <SearchField.Button />
      </SearchField>,
      <datalist id="places">
        {buurten.map((buurt: string) => (
          <option key={buurt}>{buurt}</option>
        ))}
      </datalist>,
      <Label htmlFor="sorting" key="label" className="ams-visually-hidden">
        Sorteer op
      </Label>,
      <Select id="sorting" onChange={() => {}} key="select">
        <Select.Option value="1" selected>
          Melding
        </Select.Option>
        <Select.Option value="2">Datum toegevoegd</Select.Option>
        <Select.Option value="3">Melder</Select.Option>
      </Select>,
    ],
    actions: autocompleteActions,
  },
}
