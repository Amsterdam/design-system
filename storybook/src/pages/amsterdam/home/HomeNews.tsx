import { AspectRatio, Card, Grid, Heading, Image } from '@amsterdam/design-system-react'

export const HomeNews = () => (
  <Grid paddingVertical="medium" gapVertical="small">
    <Grid.Cell span="all">
      <Heading level={2}>Nieuws</Heading>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/640/360?random=1" />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/640/360?random=2" />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Gratis openbaar vervoer voor kinderen</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/640/360?random=3" />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Zonnepanelen op uw dak? Zo houdt u uw huis veilig</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
  </Grid>
)
