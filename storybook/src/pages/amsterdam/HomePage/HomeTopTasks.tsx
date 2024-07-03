import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export const HomeTopTasks = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span="all">
      <Heading>Belangrijkste onderwerpen</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={2} size="level-4">
          <Card.Link href="#">Gemeentebelastingen</Card.Link>
        </Heading>
        <Paragraph size="small">
          Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
        </Heading>
        <Paragraph size="small">
          U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
        </Heading>
        <Paragraph size="small">Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Onderwijs</Card.Link>
        </Heading>
        <Paragraph size="small">
          Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Meldingen openbare ruimte en overlast</Card.Link>
        </Heading>
        <Paragraph size="small">
          Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de
          gemeente melden.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Verhuizing doorgeven</Card.Link>
        </Heading>
        <Paragraph size="small">Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Grof afval</Card.Link>
        </Heading>
        <Paragraph size="small">Grof afval zijn spullen die niet in een vuilniszak passen.</Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href="#">Kennisgevingen en bekendmakingen</Card.Link>
        </Heading>
        <Paragraph size="small">
          Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.
        </Paragraph>
      </Card>
    </Grid.Cell>
  </Grid>
)
