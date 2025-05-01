/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Breadcrumb, Grid } from '@amsterdam/design-system-react'

export const ArticleBreadcrumb = () => (
  <Grid>
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb className="ams-mb-m">
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
)
