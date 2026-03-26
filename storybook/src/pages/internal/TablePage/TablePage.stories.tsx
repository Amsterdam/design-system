/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { SortOrder } from './common'

import { commonMeta } from '../common/config'
import { sortOptions } from './common'
import { getSortedRanking, ranking, RankingTableBody, RankingTableHeaderRow } from './common'
import './table-page.css'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

export const SortingWithSelect: StoryObj = {
  render: () => {
    const [sortOrder, setSortOrder] = useState<SortOrder>('positie-asc')
    const sortedRanking = getSortedRanking(ranking, sortOrder)

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-xl" level={1}>
            Eredivisie 2024/2025
          </Heading>
          <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
            <Heading id="tabel-eindstand" level={2}>
              Eindstand
            </Heading>
            <Row alignVertical="center" wrap>
              <Label htmlFor="sortOrder">Sorteren op</Label>
              <Select id="sortOrder" onChange={(e) => setSortOrder(e.target.value as SortOrder)} value={sortOrder}>
                {sortOptions.map(({ label, value }) => (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Row>
          </Row>
          <Table aria-labelledby="tabel-eindstand">
            <Table.Header>
              <RankingTableHeaderRow />
            </Table.Header>
            <RankingTableBody ranking={sortedRanking} />
          </Table>
        </Grid.Cell>
      </Grid>
    )
  },
}
