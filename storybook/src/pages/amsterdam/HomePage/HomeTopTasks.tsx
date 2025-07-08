/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Grid, Heading, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'

type TopTask = {
  heading: string
  text: string
}

const topTasks: TopTask[] = [
  {
    heading: 'Verhuizing doorgeven',
    text: 'Adreswijziging in of naar Amsterdam',
  },
  {
    heading: 'Doe een melding',
    text: 'Meld kapotte dingen of overlast',
  },
  {
    heading: 'Parkeren',
    text: 'Kosten en vergunningen',
  },
  {
    heading: 'Afval',
    text: 'Ophaaldagen, containers en recycling',
  },
  {
    heading: 'Paspoort, ID-kaart en rijbewijs',
    text: 'Aanvragen of verlengen',
  },
  {
    heading: 'Bekendmakingen',
    text: 'Vergunningen en besluiten',
  },
  {
    heading: 'Belastingen',
    text: 'Betalen, kwijtschelding en bezwaar',
  },
  {
    heading: 'Stadsloketten',
    text: 'Adres en openingstijden',
  },
]
export const HomeTopTasks = () => (
  <Grid paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={1}>Direct naar</Heading>
    </Grid.Cell>
    {topTasks.map(({ heading, text }) => (
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">{heading}</Card.Link>
          </Card.Heading>
          <Paragraph>{text}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
    <Grid.Cell span="all">
      <StandaloneLink href="#" icon={ChevronForwardIcon}>
        Naar alle onderwerpen
      </StandaloneLink>
    </Grid.Cell>
  </Grid>
)
