import { Grid, Heading, Link, Paragraph, Spotlight } from '@amsterdam/design-system-react'

export const HomeSpotlight = () => (
  <Spotlight>
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb-xs" color="inverse" level={1} size="level-2">
          Ontheffing of vergunning
        </Heading>
        <Paragraph className="ams-mb-s" color="inverse">
          Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
          nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
        </Paragraph>
        <Link color="inverse" href="#" variant="standalone">
          Eenvoudig regelen
        </Link>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb-xs" color="inverse" level={1} size="level-2">
          Werkzaamheden
        </Heading>
        <Paragraph className="ams-mb-s" color="inverse">
          Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
          parken of ontwikkeling van hele gebieden.
        </Paragraph>
        <Link color="inverse" href="#" variant="standalone">
          Alle bouw- en verkeerswerkzaamheden
        </Link>
      </Grid.Cell>
    </Grid>
  </Spotlight>
)
