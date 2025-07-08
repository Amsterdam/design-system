/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Heading, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'

export const HomeNews = () => (
  <Grid paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2}>Nieuws</Heading>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <Card.Image alt="" src="https://picsum.photos/640/360?random=1" />
        <Card.HeadingGroup tagline="Nieuws">
          <Card.Heading level={3}>
            <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dignissimos esse facere inventore maxime
          nostrum placeat qui, tenetur voluptas. Ex repellat tempore ullam.
        </Paragraph>
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos neque recusandae repellendus.
      </Paragraph>
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium commodi earum harum impedit
        placeat voluptate.
      </Paragraph>
    </Grid.Cell>
    <Grid.Cell span="all">
      <StandaloneLink href="#" icon={ChevronForwardIcon}>
        Naar het nieuwsoverzicht
      </StandaloneLink>
    </Grid.Cell>
  </Grid>
)
