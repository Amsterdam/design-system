/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

export const RankingTableHeaderRow = () => (
  <Table.Row>
    <Table.HeaderCell scope="col">Positie</Table.HeaderCell>
    <Table.HeaderCell className="ams-table__cell--align-start" scope="col">
      Team
    </Table.HeaderCell>
    <Table.HeaderCell scope="col">Gespeeld</Table.HeaderCell>
    <Table.HeaderCell scope="col">Gewonnen</Table.HeaderCell>
    <Table.HeaderCell scope="col">Gelijk</Table.HeaderCell>
    <Table.HeaderCell scope="col">Verloren</Table.HeaderCell>
    <Table.HeaderCell scope="col">Punten</Table.HeaderCell>
    <Table.HeaderCell scope="col">Doelpunten voor</Table.HeaderCell>
    <Table.HeaderCell scope="col">Doelpunten tegen</Table.HeaderCell>
    <Table.HeaderCell scope="col">Doelsaldo</Table.HeaderCell>
  </Table.Row>
)
