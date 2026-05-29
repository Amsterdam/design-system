/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Figure, Heading, Paragraph } from '@amsterdam/design-system-react'
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
          <Table.HeaderCell align="end">Normale levertijd</Table.HeaderCell>
          <Table.HeaderCell align="end">Met spoed</Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Paspoort</Table.Cell>
          <Table.Cell align="end">€ 77,85</Table.Cell>
          <Table.Cell align="end">€ 130,80</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ID-kaart</Table.Cell>
          <Table.Cell align="end">€ 70,35</Table.Cell>
          <Table.Cell align="end">€ 123,30</Table.Cell>
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
          {/* Use a Header Cell with a scope for row headers. */}
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

export const WithHeadingAndDescription: Story = {
  render: () => (
    <>
      {/* Move the Heading outside the Table to have content between them. */}
      <Heading className="ams-mb-xs" level={3}>
        Kosten voor de aanvraag
      </Heading>
      <Paragraph className="ams-mb-m" size="small">
        Prijzen zijn geldig vanaf 1 januari 2025. Bron: Rijksdienst voor Identiteitsgegevens.
      </Paragraph>
      <Table>
        {/* Repeat the text of the Heading in a visually hidden Caption for accessibility. */}
        <Table.Caption className="ams-visually-hidden">Kosten voor de aanvraag</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell align="end">Normale levertijd</Table.HeaderCell>
            <Table.HeaderCell align="end">Met spoed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Paspoort</Table.Cell>
            <Table.Cell align="end">€ 77,85</Table.Cell>
            <Table.Cell align="end">€ 130,80</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ID-kaart</Table.Cell>
            <Table.Cell align="end">€ 70,35</Table.Cell>
            <Table.Cell align="end">€ 123,30</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  ),
}

export const InFigure: Story = {
  render: () => (
    <Figure>
      <Table>
        <Table.Caption>
          {/* In a Figure, the Heading can be in the Table Caption again. */}
          <Heading className="ams-mb-s" level={3}>
            Kosten voor de aanvraag
          </Heading>
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell align="end">Normale levertijd</Table.HeaderCell>
            <Table.HeaderCell align="end">Met spoed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Paspoort</Table.Cell>
            <Table.Cell align="end">€ 77,85</Table.Cell>
            <Table.Cell align="end">€ 130,80</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ID-kaart</Table.Cell>
            <Table.Cell align="end">€ 70,35</Table.Cell>
            <Table.Cell align="end">€ 123,30</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {/* A figure caption describes the content of the figure, in this case the table. */}
      <Figure.Caption>
        Prijzen zijn geldig vanaf 1 januari 2025. Bron: Rijksdienst voor Identiteitsgegevens.
      </Figure.Caption>
    </Figure>
  ),
}
