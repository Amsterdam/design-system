import React from 'react'

import { Button, Table, Column, Link, SearchField } from '@amsterdam/design-system-react'
import { EnlargeIcon } from '@amsterdam/design-system-react-icons'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'

import styles from './styles.module.css'

const overviewFilters = [
  <SearchField onSubmit={() => {}} key="search">
    <SearchField.Input size={20} className={styles.search} />
    <SearchField.Button />
  </SearchField>,
]

const overviewActions = [
  <Button variant="secondary" icon={EnlargeIcon} key="new">
    Nieuw document
  </Button>,
]

const Files = [
  {
    id: 1,
    filename: 'Notificatiebrief.docx',
    kind: 'Document',
    downloadURL: '#',
    date: '11-01-2024',
  },
  {
    id: 2,
    filename: 'Aanmeldingsformulier.docx',
    kind: 'Document',
    downloadURL: '#',
    date: '11-01-2024',
  },
  {
    id: 3,
    filename: 'Overzicht.xlsx',
    kind: 'Spreadsheet',
    downloadURL: '#',
    date: '11-01-2024',
  },
]

export default function DocumentsTab() {
  return (
    <>
      <Column className="ams-mb-m">
        <OverviewFilter filters={overviewFilters} actions={overviewActions} />
        <Table width={'100%'} className="ams-mb-m">
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
                  <Link variant="inline" href={File.downloadURL}>
                    Download
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Column>
    </>
  )
}
