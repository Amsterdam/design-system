import { Breadcrumb, Button, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { DocumentWithPencilIcon } from '@amsterdam/design-system-react-icons'
import { FC } from 'react'
import styles from './styles.module.css'
import Map from '../components/Map/Map'
import { Timeline } from '../components/Timeline'
import * as TimelineStories from '../components/Timeline/Timeline.stories'

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
            <Grid.Cell as="header" className={styles.hotspot_header} span={'all'}>
              <div>
                <Heading level={1}>Lepenplein</Heading>
                <Paragraph>Overlast bij de gemeente</Paragraph>
                <Paragraph>Vanaf: 15-4-2023</Paragraph>
              </div>
              <div>
                <Button icon={DocumentWithPencilIcon} key="new" variant="secondary">
                  Bewerken
                </Button>
              </div>
            </Grid.Cell>
          </Grid>

          <Grid paddingVertical="large">
            <Grid.Cell as="main" span={{ narrow: 4, medium: 4, wide: 7 }}>
              <Timeline
                collapsible={TimelineStories?.Default?.args?.collapsible}
                editable={TimelineStories?.Default?.args?.editable}
              >
                {TimelineStories?.Default?.args?.children ?? 'No content available'}
              </Timeline>
            </Grid.Cell>
            <Grid.Cell as="aside" span={{ narrow: 4, medium: 4, wide: 5 }}>
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
