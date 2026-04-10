/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

export const AddressTableHeaderRow = () => (
  <Table.Row>
    <Table.HeaderCell scope="col">#</Table.HeaderCell>
    <Table.HeaderCell scope="col">Straat</Table.HeaderCell>
    <Table.HeaderCell scope="col">Nr</Table.HeaderCell>
    <Table.HeaderCell scope="col">Letter</Table.HeaderCell>
    <Table.HeaderCell scope="col">Postcode</Table.HeaderCell>
    <Table.HeaderCell scope="col">Gebruiksdoel</Table.HeaderCell>
    <Table.HeaderCell scope="col">Kamers</Table.HeaderCell>
    <Table.HeaderCell scope="col">Oppervlakte</Table.HeaderCell>
    <Table.HeaderCell scope="col">Bouwjaar</Table.HeaderCell>
    <Table.HeaderCell scope="col">Status</Table.HeaderCell>
    <Table.HeaderCell scope="col">WOZ soort object</Table.HeaderCell>
  </Table.Row>
)
