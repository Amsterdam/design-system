/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

import type { Ranking } from './ranking'

type RankingTableBodyProps = {
  ranking: Ranking
}

export const RankingTableBody = ({ ranking }: RankingTableBodyProps) => (
  <Table.Body>
    {ranking.length ? (
      ranking.map(
        ({
          doelpunten_tegen,
          doelpunten_voor,
          doelsaldo,
          gelijk,
          gespeeld,
          gewonnen,
          positie,
          punten,
          team,
          verloren,
        }) => (
          <Table.Row key={positie}>
            <Table.HeaderCell scope="row">{positie}</Table.HeaderCell>
            <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">{team}</Table.Cell>
            <Table.Cell>{gespeeld}</Table.Cell>
            <Table.Cell>{gewonnen}</Table.Cell>
            <Table.Cell>{gelijk}</Table.Cell>
            <Table.Cell>{verloren}</Table.Cell>
            <Table.Cell>{punten}</Table.Cell>
            <Table.Cell>{doelpunten_voor}</Table.Cell>
            <Table.Cell>{doelpunten_tegen}</Table.Cell>
            <Table.Cell>{doelsaldo}</Table.Cell>
          </Table.Row>
        ),
      )
    ) : (
      <Table.Row>
        <Table.Cell colSpan={10}>Geen gegevens</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
)
