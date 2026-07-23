/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

// scope="col" tells assistive technology that these cells label the columns below them.
// Every align value matches the cells of its column: numbers line up on their last digit when end-aligned.
export const AddressTableHeaderRow = () => (
  <Table.Row>
    <Table.HeaderCell scope="col">#</Table.HeaderCell>
    <Table.HeaderCell scope="col">Straat</Table.HeaderCell>
    <Table.HeaderCell align="end" scope="col">
      Nr
    </Table.HeaderCell>
    <Table.HeaderCell align="center" scope="col">
      Letter
    </Table.HeaderCell>
    <Table.HeaderCell scope="col">Postcode</Table.HeaderCell>
    <Table.HeaderCell scope="col">Gebruiksdoel</Table.HeaderCell>
    <Table.HeaderCell align="end" scope="col">
      Kamers
    </Table.HeaderCell>
    <Table.HeaderCell align="end" scope="col">
      Oppervlakte
    </Table.HeaderCell>
    <Table.HeaderCell align="end" scope="col">
      Bouwjaar
    </Table.HeaderCell>
    <Table.HeaderCell scope="col">Status</Table.HeaderCell>
    <Table.HeaderCell scope="col">WOZ soort object</Table.HeaderCell>
  </Table.Row>
)
