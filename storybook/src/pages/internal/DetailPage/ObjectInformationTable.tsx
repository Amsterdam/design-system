/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactNode } from 'react'

import { Heading, Paragraph, Skeleton, Table } from '@amsterdam/design-system-react'
import { Fragment, Suspense } from 'react'

import {
  excludedObjectInformationKeys,
  formatObjectInformationValue,
  getObjectInformationResource,
  ObjectInformationErrorBoundary,
} from './objectInformation'

type ObjectInformationTableProps = {
  readonly url: string
}

const columnsPerRow = 3

const getObjectInformationRows = (entries: Array<[string, unknown]>) => {
  const rows: Array<Array<[string, unknown]>> = []

  for (let index = 0; index < entries.length; index += columnsPerRow) {
    rows.push(entries.slice(index, index + columnsPerRow))
  }

  return rows
}

const renderEmptyCells = (count: number): ReactNode[] =>
  Array.from({ length: count }, (_, index) => (
    <Fragment key={`empty-${index}`}>
      <Table.Cell />
      <Table.Cell />
    </Fragment>
  ))

const ObjectInformationTableContent = ({ url }: ObjectInformationTableProps) => {
  const objectInformation = getObjectInformationResource(url).read()
  const entries = Object.entries(objectInformation).filter(([key]) => !excludedObjectInformationKeys.has(key))

  return (
    <Table>
      <Table.Caption>
        <Heading level={2}>Objectinformatie in tabel</Heading>
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Kenmerk</Table.HeaderCell>
          <Table.HeaderCell scope="col">Waarde</Table.HeaderCell>
          <Table.HeaderCell scope="col">Kenmerk</Table.HeaderCell>
          <Table.HeaderCell scope="col">Waarde</Table.HeaderCell>
          <Table.HeaderCell scope="col">Kenmerk</Table.HeaderCell>
          <Table.HeaderCell scope="col">Waarde</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {getObjectInformationRows(entries).map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {row.flatMap(([key, value]) => [
              <Table.Cell key={`${key}-label`}>{key}</Table.Cell>,
              <Table.Cell key={`${key}-value`}>{formatObjectInformationValue(value)}</Table.Cell>,
            ])}
            {renderEmptyCells(columnsPerRow - row.length)}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const ObjectInformationTableFallback = () => (
  <div aria-busy="true">
    <p className="ams-visually-hidden" role="status">
      Objectinformatie wordt geladen
    </p>
    <Skeleton>
      <Skeleton.Table columns={6} rows={5} />
    </Skeleton>
  </div>
)

export const ObjectInformationTable = ({ url }: ObjectInformationTableProps) => (
  <ObjectInformationErrorBoundary fallback={<Paragraph>Er is iets mis gegaan</Paragraph>}>
    <Suspense fallback={<ObjectInformationTableFallback />}>
      <ObjectInformationTableContent url={url} />
    </Suspense>
  </ObjectInformationErrorBoundary>
)
