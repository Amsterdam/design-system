/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading } from '@amsterdam/design-system-react'

export const HomePage = () => (
  <Grid paddingBottom="x-large" paddingTop="large">
    <Grid.Cell span="all">
      <Heading level={1}>Titel van de pagina</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '12rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '10rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '12rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '6rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <div style={{ backgroundColor: '#e8e8e8', height: '6rem' }} />
    </Grid.Cell>
  </Grid>
)
