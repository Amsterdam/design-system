import { FC } from 'react'

import { Breadcrumb, Grid, Link, Pagination, Table } from '@amsterdam/design-system-react'

import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import { Hotspots } from '../common/Hotspots'
import Map from '../components/Map/Map'
import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

import styles from './styles.module.css'

export const MapTableView: FC = () => {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Hotspots</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>

      <main id="main">
        <Grid paddingVertical="large">
          <Grid.Cell span="all">
            <OverviewFilter
              filters={OverviewFilterStories?.Autocomplete.args?.filters}
              actions={OverviewFilterStories?.Autocomplete.args?.actions}
            />
          </Grid.Cell>
          <Grid.Cell span="all">
            <div className={styles.relative}>
              <Map />
            </div>
          </Grid.Cell>
          <Grid.Cell span="all">
            <Table width={'100%'} className="ams-mb-m">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Hotspot</Table.HeaderCell>
                  <Table.HeaderCell>Vanaf</Table.HeaderCell>
                  <Table.HeaderCell>Prioriteit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Hotspots.map((hotspot) => (
                  <Table.Row key={hotspot.id}>
                    <Table.Cell>
                      <Link href="#">{hotspot.name}</Link>
                    </Table.Cell>
                    <Table.Cell className={styles.nowrap}>{hotspot.fromDate}</Table.Cell>
                    <Table.Cell>{hotspot.priority}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Pagination maxVisiblePages={7} linkTemplate={(page: number) => `#${page}`} page={1} totalPages={10} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
