/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading } from '@amsterdam/design-system-react'

export const HomePage = () => (
  <Grid paddingVertical="x-large">
    <Grid.Cell span="all" style={{ backgroundColor: 'transparent' }}>
      <Heading level={1}>Titel van de pagina</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
      <div style={{ height: '12rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }}>
      <div style={{ height: '10rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
      <div style={{ height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
      <div style={{ height: '12rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }}>
      <div style={{ height: '6rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }}>
      <div style={{ height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <div style={{ height: '6rem' }} />
    </Grid.Cell>
  </Grid>
)
