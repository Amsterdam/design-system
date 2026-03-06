/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

type HomeNewsProps = {
  heading?: string
}

export const HomeNews = ({ heading = 'Nieuws' }: HomeNewsProps) => (
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">
        {heading}
      </Heading>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=1" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Waarom we op zoek zijn naar vleermuizen</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Paragraph>
          U kunt ’s avonds ecologen in oranje hesjes tegenkomen. Zij zijn op zoek naar vleermuizen. Dat heeft te maken
          met het verduurzamen van woningen.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=2" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Meer aandacht voor voetgangers, een jaar lang</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Paragraph>
          We gaan de veiligheid voor voetgangers verbeteren, meer ruimte maken, en lopen en wandelen stimuleren.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=3" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>
    </Grid.Cell>
  </Grid>
)
