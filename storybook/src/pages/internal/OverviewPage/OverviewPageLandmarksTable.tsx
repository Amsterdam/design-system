/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Link, Table } from '@amsterdam/design-system-react'

import overviewPageData from './overviewPageData.json'

type Landmark = (typeof overviewPageData.landmarks)[number]

type OverviewPageLandmarksTableProps = {
  readonly landmarks: readonly Landmark[]
}

export const OverviewPageLandmarksTable = ({ landmarks }: OverviewPageLandmarksTableProps) => (
  <Table>
    <Table.Caption className="ams-visually-hidden">{overviewPageData.sectionHeading}</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">Landmark</Table.HeaderCell>
        <Table.HeaderCell scope="col">Type</Table.HeaderCell>
        <Table.HeaderCell scope="col">Stadsdeel</Table.HeaderCell>
        <Table.HeaderCell align="end" scope="col">
          Jaar
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">Bron</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {landmarks.length ? (
        landmarks.map(({ district, name, sourceLabel, sourceUrl, type, year }) => (
          <Table.Row key={name}>
            <Table.HeaderCell scope="row">{name}</Table.HeaderCell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{district}</Table.Cell>
            <Table.Cell align="end">{year}</Table.Cell>
            <Table.Cell>
              <Link href={sourceUrl} rel="external">
                {sourceLabel}
                <span className="ams-visually-hidden"> over {name}</span>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))
      ) : (
        <Table.Row>
          <Table.Cell colSpan={5}>Geen resultaten</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  </Table>
)
