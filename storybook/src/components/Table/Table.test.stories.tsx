/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

import { default as TableMeta } from './Table.stories'

const meta = {
  ...TableMeta,
  title: 'Components/Containers/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Caption>Kosten voor de aanvraag</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Normaal</Table.HeaderCell>
          <Table.HeaderCell>Spoed</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
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
      </Table.Body>
    </Table>
  ),
  tags: ['!dev', '!autodocs'],
}
