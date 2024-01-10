/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Table.Caption key="caption">Dates and amounts</Table.Caption>,
      <Table.Header key="header">
        <Table.Row>
          <Table.HeaderCell scope="col">Date</Table.HeaderCell>
          <Table.HeaderCell scope="col">Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.HeaderCell scope="row">First 6 weeks</Table.HeaderCell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope="row">Next 33 weeks</Table.HeaderCell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
      </Table.Body>,
      <Table.Footer key="footer">
        <Table.Row>
          <Table.HeaderCell scope="row">Total estimated pay</Table.HeaderCell>
          <Table.Cell>£4,282.20</Table.Cell>
        </Table.Row>
      </Table.Footer>,
    ],
  },
}
