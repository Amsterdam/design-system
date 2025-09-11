/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Heading } from '@amsterdam/design-system-react'

type HomeNewsProps = {
  heading?: string
}

export const HomeNews = ({ heading = 'Nieuws' }: HomeNewsProps) => (
  <Grid paddingVertical="x-large">
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
            <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=2" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Gratis openbaar vervoer voor kinderen</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=3" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Zonnepanelen op uw dak? Zo houdt u uw huis veilig</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
  </Grid>
)
