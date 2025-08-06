import { Table, Column, Link } from '@amsterdam/design-system-react'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import clsx from 'clsx'

import styles from './styles.module.css'

import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

const Trajecten = [
  {
    id: 1,
    trajectSoort: 'Monitortraject',
    reason: 'Aanvraag',
    managedBy: 'J&V Nieuw-West',
    notificationLetter: 'Notificatiebrief.docx',
    notificationLetterPath: '#',
    startDate: '11-01-2024',
    endDate: '',
  },
  {
    id: 1,
    trajectSoort: 'Monitortraject',
    reason: 'Aanvraag',
    managedBy: 'J&V Nieuw-West',
    notificationLetter: 'Notificatiebrief.docx',
    notificationLetterPath: '#',
    startDate: '11-01-2024',
    endDate: '24-11-2024',
  },
  {
    id: 1,
    trajectSoort: 'Monitortraject',
    reason: 'Aanvraag',
    managedBy: 'J&V Nieuw-West',
    notificationLetter: 'Notificatiebrief.docx',
    notificationLetterPath: '#',
    startDate: '11-01-2024',
    endDate: '24-11-2024',
  },
  {
    id: 1,
    trajectSoort: 'Monitortraject',
    reason: 'Aanvraag',
    managedBy: 'J&V Nieuw-West',
    notificationLetter: 'Notificatiebrief.docx',
    notificationLetterPath: '#',
    startDate: '11-01-2024',
    endDate: '24-11-2024',
  },
]

export default function TableTab() {
  return (
    <>
      <Column className="ams-mb-m">
        <OverviewFilter
          filters={OverviewFilterStories?.Default.args?.filters}
          actions={OverviewFilterStories?.Default.args?.actions}
        />
        <Table className={clsx(styles.table, 'ams-mb-m')}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Trajectsoort</Table.HeaderCell>
              <Table.HeaderCell>Start</Table.HeaderCell>
              <Table.HeaderCell>Eind</Table.HeaderCell>
              <Table.HeaderCell>Beheer</Table.HeaderCell>
              <Table.HeaderCell>Notificatiebrief</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Trajecten.map((Traject) => (
              <Table.Row key={Traject.id}>
                <Table.Cell>{Traject.trajectSoort}</Table.Cell>
                <Table.Cell className={styles.tableCellNoWrap}>{Traject.startDate}</Table.Cell>
                <Table.Cell className={styles.tableCellNoWrap}>{Traject.endDate}</Table.Cell>
                <Table.Cell className={styles.tableCellNoWrap}>{Traject.managedBy}</Table.Cell>
                <Table.Cell>
                  <Link variant="inline" href={Traject.notificationLetterPath}>
                    {Traject.notificationLetter}
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
