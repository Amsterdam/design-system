import { Grid, Heading, Link, Paragraph, Spotlight } from '@amsterdam/design-system-react'

export const HomeSpotlight = () => (
  <Spotlight color="purple">
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading inverseColor size="level-2" style={{ marginBlockEnd: '1.5rem' }}>
          Ontheffing of vergunning
        </Heading>
        <Paragraph inverseColor size="small" style={{ marginBlockEnd: '1.5rem' }}>
          Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
          nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
        </Paragraph>
        <Link href="#" onBackground="dark" variant="standalone">
          Eenvoudig regelen
        </Link>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading inverseColor size="level-2" style={{ marginBlockEnd: '1.5rem' }}>
          Werkzaamheden
        </Heading>
        <Paragraph inverseColor lang="la" size="small" style={{ marginBlockEnd: '1.5rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cumque deleniti exercitationem
          facere fugiat laudantium libero magnam mollitia nisi, omnis pariatur preferendis.
        </Paragraph>
        <Link href="#" onBackground="dark" variant="standalone">
          Alle bouw- en verkeerswerkzaamheden
        </Link>
      </Grid.Cell>
    </Grid>
  </Spotlight>
)
