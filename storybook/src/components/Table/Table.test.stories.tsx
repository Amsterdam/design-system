/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as tableMeta } from './Table.stories'

const meta = {
  ...tableMeta,
  title: 'Components/Containers/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <Table.Caption key={1}>
        <h3>Kosten voor de aanvraag</h3>
      </Table.Caption>,
      <Table.Header key={2}>
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>
            Normale levertijd
            <br />1 week
          </Table.HeaderCell>
          <Table.HeaderCell>
            Spoed
            <br />2 werkdagen
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key={3}>
        <Table.Row>
          <Table.Cell>Paspoort</Table.Cell>
          <Table.Cell>€ 77,85</Table.Cell>
          <Table.Cell>€ 130,80</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ID-kaart</Table.Cell>
          <Table.Cell>€ 70,35</Table.Cell>
          <Table.Cell>€ 123,30</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
  render: (args) =>
    renderComponentVariants({
      component: Table,
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
