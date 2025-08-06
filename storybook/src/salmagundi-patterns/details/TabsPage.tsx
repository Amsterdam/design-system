import { Breadcrumb, Grid, Tabs } from '@amsterdam/design-system-react'

import { PersonHeader } from '../components/PersonHeader/PersonHeader'

import SummaryTab from './SummaryTab'
import TableTab from './TableTab'
import DocumentsTab from './DocumentsTab'
import TimelineTab from './TimelineTab'

import styles from './styles.module.css'

type PersonProps = {
  activetab: string
}

export const TabsPage = ({ activetab }: PersonProps) => {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Personen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bart Bartsen</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>

      <main id="main">
        <article>
          <header>
            <Grid>
              <Grid.Cell span={'all'}>
                <PersonHeader />
              </Grid.Cell>
            </Grid>
          </header>

          <Grid paddingVertical="large">
            <Grid.Cell span="all">
              <Tabs activeTab={activetab}>
                <Tabs.List className={styles.tabslist}>
                  <Tabs.Button aria-controls="summary">Summary</Tabs.Button>
                  <Tabs.Button aria-controls="table">Table</Tabs.Button>
                  <Tabs.Button aria-controls="documents">Documents</Tabs.Button>
                  <Tabs.Button aria-controls="timeline">Timeline</Tabs.Button>
                </Tabs.List>
                <Tabs.Panel className={styles.panel} id="summary">
                  <SummaryTab />
                </Tabs.Panel>
                <Tabs.Panel className={styles.panel} id="table">
                  <TableTab />
                </Tabs.Panel>
                <Tabs.Panel className={styles.panel} id="documents">
                  <DocumentsTab />
                </Tabs.Panel>
                <Tabs.Panel className={styles.panel} id="timeline">
                  <TimelineTab />
                </Tabs.Panel>
              </Tabs>
            </Grid.Cell>
          </Grid>
        </article>
      </main>
    </>
  )
}
