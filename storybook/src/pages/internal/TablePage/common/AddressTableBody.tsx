/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Table } from '@amsterdam/design-system-react'

import type { BagAddress } from './bagAddresses'

type AddressTableBodyProps = {
  addresses: BagAddress[]
  firstRow?: number
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
            <Table.Cell>{huisnummer}</Table.Cell>
            <Table.Cell>{huisletter}</Table.Cell>
            <Table.Cell>{postcode}</Table.Cell>
            <Table.Cell>{gebruiksdoel?.replace(',', ', ')}</Table.Cell>
            <Table.Cell>{aantalKamers}</Table.Cell>
            <Table.Cell>{oppervlakte}</Table.Cell>
            <Table.Cell>{bouwjaar}</Table.Cell>
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
