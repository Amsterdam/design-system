/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Breadcrumb, Grid } from '@aram-limpens/design-system-react'

export const ArticleBreadcrumb = () => (
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
)
