/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, Paragraph, Spotlight, StandaloneLink } from '@amsterdam/design-system-react'

export const HomeSpotlight = () => (
  <Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb-s" color="inverse" level={2}>
          Ontheffing of vergunning
        </Heading>
        <Paragraph className="ams-mb-m" color="inverse">
          Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
          nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
        </Paragraph>
        <StandaloneLink color="inverse" href="#">
          Eenvoudig regelen
        </StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading className="ams-mb-s" color="inverse" level={2}>
          Werkzaamheden
        </Heading>
        <Paragraph className="ams-mb-m" color="inverse">
          Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
          parken of ontwikkeling van hele gebieden.
        </Paragraph>
        <StandaloneLink color="inverse" href="#">
          Alle bouw- en verkeerswerkzaamheden
        </StandaloneLink>
      </Grid.Cell>
    </Grid>
  </Spotlight>
)
