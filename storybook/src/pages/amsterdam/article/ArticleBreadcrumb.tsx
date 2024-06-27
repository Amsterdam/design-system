import { Breadcrumb, Grid } from '@amsterdam/design-system-react'

export const ArticleBreadcrumb = () => (
  <Grid paddingTop="small">
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
)
