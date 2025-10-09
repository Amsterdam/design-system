/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from '@amsterdam/design-system-react'
import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Table.Caption key="caption">
        <Heading level={3}>Kosten voor de aanvraag</Heading>
      </Table.Caption>,
      <Table.Header key="header">
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
      <Table.Body key="body">
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
}

export const WithFooterAndRowHeaders: Story = {
  args: {
    children: [
      <Table.Caption key="caption">
        <Heading level={3}>Verwachte kosten per week</Heading>
      </Table.Caption>,
      <Table.Header key="header">
        <Table.Row>
          <Table.HeaderCell>Tijd</Table.HeaderCell>
          <Table.HeaderCell>Kosten</Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.HeaderCell scope="row">Eerste 6 weken</Table.HeaderCell>
          <Table.Cell>€ 109,80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope="row">Volgende 33 weken</Table.HeaderCell>
          <Table.Cell>€ 79,80 per week</Table.Cell>
        </Table.Row>
      </Table.Body>,
      <Table.Footer key="footer">
        <Table.Row>
          <Table.HeaderCell scope="row">Totale verwachte kosten</Table.HeaderCell>
          <Table.Cell>€ 3.292,20</Table.Cell>
        </Table.Row>
      </Table.Footer>,
    ],
  },
}
