/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Icon } from '@amsterdam/design-system-react'
import { BarChartIcon, CogwheelIcon, DocumentIcon, FolderIcon } from '@amsterdam/design-system-react-icons'
import styles from './styles.module.css'

export const DashboardPage = () => {
  return (
    <>
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell span="all">
          <div className={styles.tiles}>
            <Card className={styles.tile}>
              <Card.Heading level={2}>
                <Card.Link className={styles.link} href="#">
                  <Icon className={styles.icon} svg={FolderIcon} />
                  Projecten
                </Card.Link>
              </Card.Heading>
            </Card>
            <Card className={styles.tile}>
              <Card.Heading level={2}>
                <Card.Link className={styles.link} href="#">
                  <Icon className={styles.icon} svg={DocumentIcon} />
                  Rapportages
                </Card.Link>
              </Card.Heading>
            </Card>
            <Card className={styles.tile}>
              <Card.Heading level={2}>
                <Card.Link className={styles.link} href="#">
                  <Icon className={styles.icon} svg={BarChartIcon} />
                  Analyses
                </Card.Link>
              </Card.Heading>
            </Card>
            <Card className={styles.tile}>
              <Card.Heading level={2}>
                <Card.Link className={styles.link} href="#">
                  <Icon className={styles.icon} svg={CogwheelIcon} />
                  Instellingen
                </Card.Link>
              </Card.Heading>
            </Card>
          </div>
        </Grid.Cell>
      </Grid>
    </>
  )
}
