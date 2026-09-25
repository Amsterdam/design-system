/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FormEvent } from 'react'

import { ActionGroup, Button, Column, Field, Heading, Label, Select, TextInput } from '@amsterdam/design-system-react'

import { bagAddresses } from './bagAddresses'

export type AddressTableFiltersValues = {
  readonly aantalKamers: string
  readonly bouwjaar: string
  readonly gebruiksdoel: string
  readonly huisletter: string
  readonly huisnummer: string
  readonly oppervlakte: string
  readonly postcode: string
  readonly status: string
  readonly straat: string
  readonly wozSoortObject: string
}

type AddressTableFiltersProps = {
  readonly onApply: (filters: AddressTableFiltersValues) => void
  readonly onClear: () => void
}

const splitValues = (value?: string) =>
  value
    ?.split(',')
    .map((part) => part.trim())
    .filter(Boolean) ?? []

const uniqueValues = (values: ReadonlyArray<string | undefined>) =>
  [...new Set(values.filter((value): value is string => Boolean(value)))].sort((first, second) =>
    first.localeCompare(second, 'nl'),
  )

const gebruiksdoelOptions = uniqueValues(bagAddresses.map(({ gebruiksdoel }) => gebruiksdoel))
const statusOptions = uniqueValues(bagAddresses.map(({ status }) => status))
const wozSoortObjectOptions = uniqueValues(bagAddresses.flatMap(({ wozSoortObject }) => splitValues(wozSoortObject)))

const readValue = (formData: FormData, name: keyof AddressTableFiltersValues) => String(formData.get(name) ?? '').trim()

const readFilters = (formData: FormData): AddressTableFiltersValues => ({
  aantalKamers: readValue(formData, 'aantalKamers'),
  bouwjaar: readValue(formData, 'bouwjaar'),
  gebruiksdoel: readValue(formData, 'gebruiksdoel'),
  huisletter: readValue(formData, 'huisletter').toUpperCase(),
  huisnummer: readValue(formData, 'huisnummer'),
  oppervlakte: readValue(formData, 'oppervlakte'),
  postcode: readValue(formData, 'postcode').replaceAll(' ', '').toUpperCase(),
  status: readValue(formData, 'status'),
  straat: readValue(formData, 'straat').toLowerCase(),
  wozSoortObject: readValue(formData, 'wozSoortObject'),
})

export const AddressTableFilters = ({ onApply, onClear }: AddressTableFiltersProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onApply(readFilters(new FormData(event.currentTarget)))
  }

  return (
    <Column aria-labelledby="address-table-filters-heading" as="section" gap="large">
      <Heading id="address-table-filters-heading" level={2}>
        Filters
      </Heading>
      <form onReset={onClear} onSubmit={handleSubmit}>
        <Column gap="large">
          <Field>
            <Label htmlFor="address-filter-street">Straat</Label>
            <TextInput id="address-filter-street" name="straat" />
          </Field>
          <Field>
            <Label htmlFor="address-filter-house-number">Nr</Label>
            <TextInput
              id="address-filter-house-number"
              inputMode="numeric"
              name="huisnummer"
              pattern="[0-9]*"
              size={3}
            />
          </Field>
          <Field>
            <Label htmlFor="address-filter-house-letter">Letter</Label>
            <TextInput id="address-filter-house-letter" name="huisletter" size={3} />
          </Field>
          <Field>
            <Label htmlFor="address-filter-postcode">Postcode</Label>
            <TextInput id="address-filter-postcode" name="postcode" size={7} />
          </Field>
          <Field>
            <Label htmlFor="address-filter-gebruiksdoel">Gebruiksdoel</Label>
            <Select defaultValue="" id="address-filter-gebruiksdoel" name="gebruiksdoel">
              <Select.Option value="">Alle gebruiksdoelen</Select.Option>
              {gebruiksdoelOptions.map((gebruiksdoel) => (
                <Select.Option key={gebruiksdoel} value={gebruiksdoel}>
                  {gebruiksdoel}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label htmlFor="address-filter-number-of-rooms">Kamers</Label>
            <TextInput
              id="address-filter-number-of-rooms"
              inputMode="numeric"
              name="aantalKamers"
              pattern="[0-9]*"
              size={3}
            />
          </Field>
          <Field>
            <Label htmlFor="address-filter-area">Oppervlakte</Label>
            <TextInput id="address-filter-area" inputMode="numeric" name="oppervlakte" pattern="[0-9]*" size={5} />
          </Field>
          <Field>
            <Label htmlFor="address-filter-construction-year">Bouwjaar</Label>
            <TextInput
              id="address-filter-construction-year"
              inputMode="numeric"
              name="bouwjaar"
              pattern="[0-9]*"
              size={5}
            />
          </Field>
          <Field>
            <Label htmlFor="address-filter-status">Status</Label>
            <Select defaultValue="" id="address-filter-status" name="status">
              <Select.Option value="">Alle statussen</Select.Option>
              {statusOptions.map((status) => (
                <Select.Option key={status} value={status}>
                  {status}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label htmlFor="address-filter-woz-type">WOZ soort object</Label>
            <Select defaultValue="" id="address-filter-woz-type" name="wozSoortObject">
              <Select.Option value="">Alle WOZ soorten</Select.Option>
              {wozSoortObjectOptions.map((wozSoortObject) => (
                <Select.Option key={wozSoortObject} value={wozSoortObject}>
                  {wozSoortObject}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <div>
            <ActionGroup>
              <Button type="submit">Toepassen</Button>
              <Button type="reset" variant="secondary">
                Wissen
              </Button>
            </ActionGroup>
          </div>
        </Column>
      </form>
    </Column>
  )
}
