/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

import type { BagAddress } from './bagAddresses'

type AddressTableBodyProps = {
  readonly addresses: BagAddress[]
  readonly firstRow?: number
}

export const AddressTableBody = ({ addresses, firstRow = 1 }: AddressTableBodyProps) => (
  <Table.Body>
    {addresses.length ? (
      addresses.map(
        (
          {
            aantalKamers,
            bouwjaar,
            gebruiksdoel,
            huisletter,
            huisnummer,
            id,
            oppervlakte,
            postcode,
            status,
            straat,
            wozSoortObject,
          },
          index,
        ) => (
          <Table.Row key={id}>
            <Table.HeaderCell scope="row">{firstRow + index}</Table.HeaderCell>
            <Table.Cell>{straat}</Table.Cell>
            <Table.Cell align="end">{huisnummer}</Table.Cell>
            <Table.Cell align="center">{huisletter}</Table.Cell>
            <Table.Cell>{postcode}</Table.Cell>
            <Table.Cell>{gebruiksdoel?.replace(',', ', ')}</Table.Cell>
            <Table.Cell align="end">{aantalKamers}</Table.Cell>
            <Table.Cell align="end">{oppervlakte}</Table.Cell>
            <Table.Cell align="end">{bouwjaar}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>{wozSoortObject?.replace(',', ', ')}</Table.Cell>
          </Table.Row>
        ),
      )
    ) : (
      <Table.Row>
        <Table.Cell colSpan={11}>Geen resultaten</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
)
