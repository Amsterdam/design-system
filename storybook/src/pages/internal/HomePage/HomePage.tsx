/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export const HomePage = () => (
  <Grid paddingBottom="x-large" paddingTop="large">
    <Grid.Cell span="all">
      <Heading level={1}>Titel van de pagina</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          height: '12rem',
          padding: 'var(--ams-space-m)',
        }}
      >
        <Heading className="ams-mb-s" level={2}>
          Subtitel van dit blokje
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id, inventore, iste libero magni nulla
          numquam officia quisquam quos sit temporibus velit. Ad alias, aliquid cum deleniti ducimus facilis impedit
          ipsa labore minus nostrum perferendis quae rem repudiandae sapiente voluptates. A accusamus commodi corporis,
          deleniti dicta dolores doloribus exercitationem fugit id nam non perferendis possimus quaerat quasi quis
          ratione reiciendis repudiandae sit temporibus totam.
        </Paragraph>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }}>
      <div style={{ backgroundColor: '#ffffff', height: '10rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
      <div style={{ backgroundColor: '#ffffff', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
      <div style={{ backgroundColor: '#ffffff', height: '12rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ backgroundColor: '#ffffff', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }}>
      <div style={{ backgroundColor: '#ffffff', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }}>
      <div style={{ backgroundColor: '#ffffff', height: '6rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }}>
      <div style={{ backgroundColor: '#ffffff', height: '8rem' }} />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <div style={{ backgroundColor: '#ffffff', height: '6rem' }} />
    </Grid.Cell>
  </Grid>
)
