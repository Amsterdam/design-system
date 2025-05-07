import {
  Breadcrumb,
  Button,
  Card,
  DescriptionList,
  Grid,
  Heading,
  Image,
  PageHeading,
  Paragraph,
  Row,
  SearchField,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { articles, formatDate, randomCategories, topArticles } from './content'

export const NewsIndexPage = () => [
  <Grid gapVertical="large" paddingBottom="large" paddingTop="small">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
      <Breadcrumb>
        <Breadcrumb.Link>Home</Breadcrumb.Link>
      </Breadcrumb>
      <PageHeading className="ams-mb-m">Nieuws uit Amsterdam</PageHeading>
      <Paragraph size="large">
        Aenean lorem elit, commodo eget elit sit amet, auctor venenatis ligula. Phasellus faucibus fringilla viverra.
        Aliquam vestibulum vehicula enim, ac consequat nisl mattis id.
      </Paragraph>
    </Grid.Cell>
    {topArticles.map(({ title, description, enclosure, guid, link, pubDate }, index) => (
      <Grid.Cell key={guid} span={4} start={index === 0 ? 1 : undefined}>
        <Card>
          <Image alt="" src={enclosure.url} />
          <Card.HeadingGroup tagline={randomCategories()}>
            <Heading level={4}>
              <Card.Link href={link}>{title}</Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph className="ams-mb-xs">{description}</Paragraph>
          <Paragraph size="small">{formatDate(pubDate)}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
    <Grid.Cell className="ams-gap-m" span={{ narrow: 4, medium: 6, wide: 8 }}>
      <Heading level={2} size="level-1">
        Nieuws zoeken
      </Heading>
      <SearchField>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>
      <DescriptionList style={{ '--ams-description-list-row-gap': 'var(--ams-space-m)' } as any}>
        <DescriptionList.Term>Soort nieuws</DescriptionList.Term>
        <DescriptionList.Description>
          <Row wrap>
            <Button variant="secondary">Algemeen</Button>
            <Button variant="secondary">Achtergrond</Button>
            <Button variant="secondary">Werkzaamheden</Button>
          </Row>
        </DescriptionList.Description>
        <DescriptionList.Term>Uit stadsdeel</DescriptionList.Term>
        <DescriptionList.Description>
          <Row wrap>
            {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district) => (
              <Button variant="secondary">{district}</Button>
            ))}
          </Row>
        </DescriptionList.Description>
      </DescriptionList>
    </Grid.Cell>
    {articles.map(({ title, description, enclosure, guid, link, pubDate }) => (
      <Grid.Cell key={guid} span="all">
        <Card className="ams-card--horizontal">
          <Grid.Cell span={4}>
            <Image alt="" src={enclosure.url} />
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
            <Card.HeadingGroup tagline={randomCategories()}>
              <Heading level={4}>
                <Card.Link href={link}>{title}</Card.Link>
              </Heading>
            </Card.HeadingGroup>
            <Paragraph className="ams-mb-xs">{description}</Paragraph>
            <Paragraph size="small">{formatDate(pubDate)}</Paragraph>
          </Grid.Cell>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>,
  <Spotlight className="ams-mb-2xl" color="green">
    <Grid paddingVertical="large">
      <Grid.Cell className="ams-gap-m" span={{ narrow: 4, medium: 6, wide: 8 }}>
        <Heading color="inverse" level={2}>
          Blijf op de hoogte
        </Heading>
        <Paragraph color="inverse">
          Schrijf u nu in voor de Nieuwsbrief Amsterdam en ontvang wekelijks nieuws, tips en mooie verhalen over de stad
          en uw stadsdeel.
        </Paragraph>
        <StandaloneLink color="inverse" href="#">
          Ik wil de nieuwsbrief
        </StandaloneLink>
      </Grid.Cell>
    </Grid>
  </Spotlight>,
]
