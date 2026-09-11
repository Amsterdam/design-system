/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Table } from '@amsterdam/design-system-react'

type ObjectInformationTableProps = {
  readonly events: readonly HistoryEvent[]
}

type HistoryEvent = {
  readonly details: string
  readonly event: string
  readonly year: string
}

export const ObjectInformationTable = ({ events }: ObjectInformationTableProps) => (
  <Table>
    <Table.Caption>
      <Heading level={3}>Historische mijlpalen</Heading>
    </Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">Jaar</Table.HeaderCell>
        <Table.HeaderCell scope="col">Gebeurtenis</Table.HeaderCell>
        <Table.HeaderCell scope="col">Toelichting</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {events.map(({ details, event, year }) => (
        <Table.Row key={`${year}-${event}`}>
          <Table.HeaderCell scope="row">{year}</Table.HeaderCell>
          <Table.Cell>{event}</Table.Cell>
          <Table.Cell>{details}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)
