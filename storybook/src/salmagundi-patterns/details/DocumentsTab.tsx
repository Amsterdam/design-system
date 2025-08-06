import { Button, Column, Link, SearchField, Table } from '@amsterdam/design-system-react'
import { PlusIcon } from '@amsterdam/design-system-react-icons'
import React from 'react'
import styles from './styles.module.css'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'

const overviewFilters = [
  <SearchField key="search" onSubmit={() => {}}>
    <SearchField.Input className={styles.search} size={20} />
    <SearchField.Button />
  </SearchField>,
]

const overviewActions = [
  <Button icon={PlusIcon} key="new" variant="secondary">
    Nieuw document
  </Button>,
]

const Files = [
  {
    date: '11-01-2024',
    downloadURL: '#',
    filename: 'Notificatiebrief.docx',
    id: 1,
    kind: 'Document',
  },
  {
    date: '11-01-2024',
    downloadURL: '#',
    filename: 'Aanmeldingsformulier.docx',
    id: 2,
    kind: 'Document',
  },
  {
    date: '11-01-2024',
    downloadURL: '#',
    filename: 'Overzicht.xlsx',
    id: 3,
    kind: 'Spreadsheet',
  },
]

export default function DocumentsTab() {
  return (
    <>
      <Column className="ams-mb-m">
        <OverviewFilter actions={overviewActions} filters={overviewFilters} />
        <Table className="ams-mb-m" width={'100%'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Bestandsnaam</Table.HeaderCell>
              <Table.HeaderCell>Datum</Table.HeaderCell>
              <Table.HeaderCell>Soort</Table.HeaderCell>
              <Table.HeaderCell>Acties</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Files.map((File) => (
              <Table.Row key={File.id}>
                <Table.Cell>{File.filename}</Table.Cell>
                <Table.Cell>{File.date}</Table.Cell>
                <Table.Cell>{File.kind}</Table.Cell>
                <Table.Cell>
                  <Link href={File.downloadURL}>Download</Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Column>
    </>
  )
}
