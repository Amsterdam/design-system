import { Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export type AmsterdamArticleContentProps = {}

export const AmsterdamArticleContent = () => {
  return (
    <Grid paddingVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Column gap="medium">
          <Paragraph size="large">
            Tussen 1813 en 1870 was Amsterdam in verval. In 1735 leefden er 240.000 mensen in de stad. In 1815 waren dat
            er nog maar 180.000. Amsterdam was een stervende stad, terend op oude roem en een kleine groep rijken.
            Verkrotting, isolement en armoede tekenden de stad. Amsterdam verdween bijna van het wereldtoneel.
          </Paragraph>
          <Paragraph>
            Tot slaaf gemaakte mensen vluchtten en kwamen regelmatig in opstand. De Nederlandse
            anti-slavernij-activisten waren vaak jongeren en vrouwen. Bezoekers zien, lezen en horen persoonlijke
            verhalen van mensen die tegen de trans-Atlantische slavernij in verzet kwamen.
          </Paragraph>
          <Heading level={3}>Van alle tijden</Heading>
          <Paragraph>
            “Verzet tegen onrecht is van alle tijden en van alle mensen. Dat is wat ons verbindt. Deze tentoonstelling
            past daarom goed in het Verzetsmuseum”, zegt Peggy Brandon, kwartiermaker Nationaal Slavernijmuseum. Het
            Verzetsmuseum gaat over de geschiedenis van de Tweede Wereldoorlog.
          </Paragraph>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
