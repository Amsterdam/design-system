import { FC } from 'react'

import { Breadcrumb, Column, Grid, Pagination, Row, StandaloneLink, Table } from '@amsterdam/design-system-react'

import { Persons } from '../common/Personen'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import { StatusBadge } from '../components/StatusBadge/StatusBadge'

import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

export const TableView: FC = () => {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Personen</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>

      <main id="main">
        <Grid paddingVertical="large">
          <Grid.Cell span="all">
            <OverviewFilter
              filters={OverviewFilterStories?.Default.args?.filters}
              actions={OverviewFilterStories?.Default.args?.actions}
            />
          </Grid.Cell>
          <Grid.Cell span="all">
            <article>
              <Column>
                <Table width={'100%'} className="ams-mb-m">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Naam</Table.HeaderCell>
                      <Table.HeaderCell>Laatste update</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>
                        <Row align="end">Acties</Row>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {Persons.map((person) => (
                      <Table.Row key={person.id}>
                        <Table.Cell>{person.name}</Table.Cell>
                        <Table.Cell>{person.lastUpdate}</Table.Cell>
                        <Table.Cell>
                          <StatusBadge status={person.status} />
                        </Table.Cell>
                        <Table.Cell>
                          <Row align="end">
                            <StandaloneLink href="#">Bewerken</StandaloneLink>
                          </Row>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
                <Pagination maxVisiblePages={7} linkTemplate={(page: number) => `#${page}`} page={1} totalPages={10} />
              </Column>
            </article>
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
