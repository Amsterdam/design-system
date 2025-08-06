import { Breadcrumb, Column, Grid, Pagination, Row, StandaloneLink, Table } from '@amsterdam/design-system-react'
import { FC } from 'react'
import { Persons } from '../common/Personen'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'
import { StatusBadge } from '../components/StatusBadge/StatusBadge'

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
              actions={OverviewFilterStories?.Default.args?.actions}
              filters={OverviewFilterStories?.Default.args?.filters}
            />
          </Grid.Cell>
          <Grid.Cell span="all">
            <article>
              <Column>
                <Table className="ams-mb-m" width={'100%'}>
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
                <Pagination linkTemplate={(page: number) => `#${page}`} maxVisiblePages={7} page={1} totalPages={10} />
              </Column>
            </article>
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
