import { Grid, Heading, Link, Paragraph, Spotlight } from '@amsterdam/design-system-react'

export const HomeSpotlight = () => (
  <Spotlight color="purple">
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb--xs" inverseColor size="level-2">
          Ontheffing of vergunning
        </Heading>
        <Paragraph className="ams-mb--sm" inverseColor>
          Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
          nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
        </Paragraph>
        <Link href="#" onBackground="dark" variant="standalone">
          Eenvoudig regelen
        </Link>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb--xs" inverseColor size="level-2">
          Werkzaamheden
        </Heading>
        <Paragraph className="ams-mb--sm" inverseColor>
          Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
          parken of ontwikkeling van hele gebieden.
        </Paragraph>
        <Link href="#" onBackground="dark" variant="standalone">
          Alle bouw- en verkeerswerkzaamheden
        </Link>
      </Grid.Cell>
    </Grid>
  </Spotlight>
)
