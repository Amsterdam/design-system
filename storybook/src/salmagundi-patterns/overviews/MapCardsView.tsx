import { Breadcrumb, Card, Grid, Pagination, Paragraph } from '@amsterdam/design-system-react'
import { FC } from 'react'
import styles from './styles.module.css'
import { Meldingen } from '../common/Meldingen'
import Map from '../components/Map/Map'
import { OverviewFilter } from '../components/OverviewFilter/OverviewFilter'
import * as OverviewFilterStories from '../components/OverviewFilter/OverviewFilter.stories'

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
              actions={OverviewFilterStories?.Autocomplete.args?.actions}
              filters={OverviewFilterStories?.Autocomplete.args?.filters}
            />
          </Grid.Cell>
          <Grid.Cell span="all">
            <div className={styles.relative}>
              <Map />
            </div>
          </Grid.Cell>
          <Grid.Cell className={styles.cards} span="all">
            {Meldingen.map((melding) => (
              <Card className={styles.card} key={melding.id}>
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
            <Pagination linkTemplate={(page: number) => `#${page}`} maxVisiblePages={7} page={1} totalPages={10} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
