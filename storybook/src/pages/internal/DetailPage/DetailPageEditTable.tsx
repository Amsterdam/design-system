/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactNode } from 'react'

import { Button, Table } from '@amsterdam/design-system-react'
import { PencilIcon, PlusIcon } from '@amsterdam/design-system-react-icons'
import { IconButton } from '@amsterdam/design-system-react/src'

type DetailPageEditTableColumn<Row> = {
  readonly header: string
  readonly isRowHeader?: boolean
  readonly renderCell: (row: Row, index: number) => ReactNode
}

type DetailPageEditTableProps<Row> = {
  readonly addButtonLabel: string
  readonly caption: string
  readonly columns: readonly DetailPageEditTableColumn<Row>[]
  readonly getEditLabel: (row: Row, index: number) => string
  readonly getRowKey: (row: Row, index: number) => string
  readonly onAdd: () => void
  readonly onEdit: (index: number) => void
  readonly rows: readonly Row[]
}

export const DetailPageEditTable = <Row,>({
  addButtonLabel,
  caption,
  columns,
  getEditLabel,
  getRowKey,
  onAdd,
  onEdit,
  rows,
}: DetailPageEditTableProps<Row>) => (
  <div>
    <Table className="ams-mb-m">
      <Table.Caption className="ams-visually-hidden">{caption}</Table.Caption>
      <Table.Header>
        <Table.Row>
          {columns.map(({ header }) => (
            <Table.HeaderCell key={header} scope="col">
              {header}
            </Table.HeaderCell>
          ))}
          <Table.HeaderCell scope="col">Actie</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row, index) => (
          <Table.Row key={getRowKey(row, index)}>
            {columns.map(({ header, isRowHeader, renderCell }) =>
              isRowHeader ? (
                <Table.HeaderCell key={header} scope="row">
                  {renderCell(row, index)}
                </Table.HeaderCell>
              ) : (
                <Table.Cell key={header}>{renderCell(row, index)}</Table.Cell>
              ),
            )}
            <Table.Cell>
              <IconButton label={getEditLabel(row, index)} onClick={() => onEdit(index)} svg={PencilIcon} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <Button icon={PlusIcon} onClick={onAdd} type="button" variant="secondary">
      {addButtonLabel}
    </Button>
  </div>
)
