import { FC } from 'react'

import { Breadcrumb, Card, Grid, Pagination, Paragraph } from '@amsterdam/design-system-react'

import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import { Meldingen } from '../common/Meldingen'
import Map from '../components/Map/Map'
import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

import styles from './styles.module.css'

export const MapCardsView: FC = () => {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Meldingen</Breadcrumb.Link>
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
          <Grid.Cell span="all" className={styles.cards}>
            {Meldingen.map((melding) => (
              <Card key={melding.id} className={styles.card}>
                <Card.HeadingGroup tagline={melding.type}>
                  <Card.Heading level={4}>
                    <Card.Link href="#">{melding.title}</Card.Link>
                  </Card.Heading>
                </Card.HeadingGroup>
                {melding.reporter ? (
                  <Paragraph size="small">Gemeld door: {melding.reporter}</Paragraph>
                ) : (
                  <Paragraph size="small">Melder wil anoniem blijven</Paragraph>
                )}
                <Paragraph size="small">Toegevoegd op: {melding.addedDate}</Paragraph>
              </Card>
            ))}
          </Grid.Cell>
          <Grid.Cell span="all">
            <Pagination maxVisiblePages={7} linkTemplate={(page: number) => `#${page}`} page={1} totalPages={10} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
