/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { SortOrder } from './common'

import { commonMeta } from '../common/config'
import { AddressTableBody, AddressTableHeaderRow, bagAddresses, sortAddresses, sortOptions } from './common'
import './table-page.css'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

export const SortingWithSelect: StoryObj = {
  render: () => {
    const [sortOrder, setSortOrder] = useState<SortOrder>('straat-asc')
    const addresses = sortAddresses(bagAddresses.slice(0, 30), sortOrder)

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell span="all">
          <Row align="end" alignVertical="center" className="ams-mb-m" wrap>
            <Label htmlFor="sortOrder">Sorteren op</Label>
            <Select id="sortOrder" onChange={(e) => setSortOrder(e.target.value as SortOrder)} value={sortOrder}>
              {sortOptions.map(({ label, value }) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Row>
          <Table>
            <Table.Caption>
              <Heading level={1}>BAG Adressen</Heading>
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
