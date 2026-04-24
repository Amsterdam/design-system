/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, Paragraph, Table } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as tableMeta } from './Table.stories'

const meta = {
  ...tableMeta,
  title: 'Components/Containers/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    'aria-labelledby': 'caption-heading',
    children: [
      <Table.Caption key="caption">
        <Heading id="caption-heading" level={3}>
          Kosten voor de aanvraag
        </Heading>
        <Paragraph size="small">
          Prijzen zijn geldig vanaf 1 januari 2025. Bron: Rijksdienst voor Identiteitsgegevens.
        </Paragraph>
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
  render: (args) => renderComponentVariants(Table, { args }),
  tags: ['!dev', '!autodocs'],
}
