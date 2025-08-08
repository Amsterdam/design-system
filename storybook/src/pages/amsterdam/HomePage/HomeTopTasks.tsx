/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export const HomeTopTasks = () => (
  <Grid paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">
        Belangrijkste onderwerpen
      </Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Gemeentebelastingen</Card.Link>
        </Card.Heading>
        <Paragraph>
          Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
        </Card.Heading>
        <Paragraph>U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
        </Card.Heading>
        <Paragraph>Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Onderwijs</Card.Link>
        </Card.Heading>
        <Paragraph>
          Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Meldingen openbare ruimte en overlast</Card.Link>
        </Card.Heading>
        <Paragraph>
          Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de
          gemeente melden.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Verhuizing doorgeven</Card.Link>
        </Card.Heading>
        <Paragraph>Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Grof afval</Card.Link>
        </Card.Heading>
        <Paragraph>Grof afval zijn spullen die niet in een vuilniszak passen.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Card.Heading level={3}>
          <Card.Link href="#">Kennisgevingen en bekendmakingen</Card.Link>
        </Card.Heading>
        <Paragraph>Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.</Paragraph>
      </Card>
    </Grid.Cell>
  </Grid>
)
