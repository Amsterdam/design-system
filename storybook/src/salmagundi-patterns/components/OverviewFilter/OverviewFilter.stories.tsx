import { Button, Label, SearchField, Select } from '@amsterdam/design-system-react'
import { PlusIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { OverviewFilter } from './OverviewFilter'
import { buurten } from '../../common/utils/buurten'

const defaultFilters = [
  <SearchField key="search" onSubmit={() => {}}>
    <SearchField.Input />
    <SearchField.Button />
  </SearchField>,
  <Select key="select" onChange={() => {}}>
    <Select.Option value="1">Optie 1</Select.Option>
    <Select.Option value="2">Optie 2</Select.Option>
    <Select.Option value="3">Optie 3</Select.Option>
    <Select.Option value="4">Optie met een lange naam</Select.Option>
  </Select>,
]

const defaultActions = [
  <Button icon={PlusIcon} key="new" variant="secondary">
    Nieuw item
  </Button>,
]

const autocompleteActions = [
  <Button icon={PlusIcon} key="new" variant="secondary">
    Melding toevoegen
  </Button>,
]

const meta = {
  title: 'Components/OverviewFilter',
  component: OverviewFilter,
  args: {
    actions: defaultActions,
    filters: defaultFilters,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OverviewFilter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    actions: defaultActions,
    filters: defaultFilters,
  },
}

export const Autocomplete: Story = {
  args: {
    actions: autocompleteActions,
    filters: [
      <SearchField key="search" onSubmit={() => {}}>
        <SearchField.Input list="places" placeholder="Zoek op straat, postcode, bericht of SIA nummer" />
        <SearchField.Button />
      </SearchField>,
      <datalist id="places">
        {buurten.map((buurt: string) => (
          <option key={buurt}>{buurt}</option>
        ))}
      </datalist>,
      <Label className="ams-visually-hidden" htmlFor="sorting" key="label">
        Sorteer op
      </Label>,
      <Select id="sorting" key="select" onChange={() => {}}>
        <Select.Option selected value="1">
          Melding
        </Select.Option>
        <Select.Option value="2">Datum toegevoegd</Select.Option>
        <Select.Option value="3">Melder</Select.Option>
      </Select>,
    ],
  },
}
