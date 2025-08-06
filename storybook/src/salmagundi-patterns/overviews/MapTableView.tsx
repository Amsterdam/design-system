import { Breadcrumb, Grid, Link, Pagination, Table } from '@amsterdam/design-system-react'
import { FC } from 'react'
import styles from './styles.module.css'
import { Hotspots } from '../common/Hotspots'
import Map from '../components/Map/Map'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

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
              actions={OverviewFilterStories?.Autocomplete.args?.actions}
              filters={OverviewFilterStories?.Autocomplete.args?.filters}
            />
          </Grid.Cell>
          <Grid.Cell span="all">
            <div className={styles.relative}>
              <Map />
            </div>
          </Grid.Cell>
          <Grid.Cell span="all">
            <Table className="ams-mb-m" width={'100%'}>
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
            <Pagination linkTemplate={(page: number) => `#${page}`} maxVisiblePages={7} page={1} totalPages={10} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
