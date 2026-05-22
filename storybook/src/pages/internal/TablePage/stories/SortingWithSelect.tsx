/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'

import type { SortOrder } from '../common'

import { AddressTableBody, AddressTableHeaderRow, bagAddresses, sortAddresses, sortOptions } from '../common'

const params = new URLSearchParams(window.location.search)

export const SortingWithSelect: StoryObj = {
  render: () => {
    const sortOrder = (params.get('sort') ?? 'straat-asc') as SortOrder
    const addresses = sortAddresses(bagAddresses.slice(0, 30), sortOrder)

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell className="ams-grid__cell--transparent" span="all">
          <Heading level={1}>Vergunninghouders 2026/2027</Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('sort', new FormData(e.currentTarget).get('sort') as string)
              window.location.href = url.toString()
            }}
          >
            <Row align="end" alignVertical="center" wrap>
              <Label htmlFor="sort">Sorteren op</Label>
              <Select defaultValue={sortOrder} id="sort" name="sort" onChange={(e) => e.target.form?.requestSubmit()}>
                {sortOptions.map(({ label, value }) => (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Row>
          </form>
          <Table>
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Gegevens per adres</Heading>
            </Table.Caption>
            <Table.Header>
              <AddressTableHeaderRow />
            </Table.Header>
            <AddressTableBody addresses={addresses} />
          </Table>
        </Grid.Cell>
      </Grid>
    )
  },
}
