import { FC } from 'react'

import { Breadcrumb, Button, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

import Map from '../components/Map/Map'
import { EditDocumentIcon } from '@amsterdam/design-system-react-icons'
import { Timeline } from '../components/Timeline'
import * as TimelineStories from '../components/Timeline/Timeline.stories'

import styles from './styles.module.css'

export const MapPage: FC = () => {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Hotspots</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Lepenplein</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>

      <main id="main">
        <article>
          <Grid>
            <Grid.Cell as="header" span={'all'} className={styles.hotspot_header}>
              <div>
                <Heading>Lepenplein</Heading>
                <Paragraph>Overlast bij de gemeente</Paragraph>
                <Paragraph>Vanaf: 15-4-2023</Paragraph>
              </div>
              <div>
                <Button variant="secondary" icon={EditDocumentIcon} key="new">
                  Bewerken
                </Button>
              </div>
            </Grid.Cell>
          </Grid>

          <Grid paddingVertical="large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }} as="main">
              <Timeline
                collapsible={TimelineStories?.Default?.args?.collapsible}
                editable={TimelineStories?.Default?.args?.editable}
              >
                {TimelineStories?.Default?.args?.children ?? 'No content available'}
              </Timeline>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} as="aside">
              <div className={styles.map_container}>
                <Map />
              </div>
            </Grid.Cell>
          </Grid>
        </article>
      </main>
    </>
  )
}
