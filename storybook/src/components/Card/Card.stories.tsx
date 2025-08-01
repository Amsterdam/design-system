/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Grid, Paragraph } from '@amsterdam/design-system-react'
import { Card } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { formatDate } from '../../utils/formatDate'
import { exampleTopTask } from '../shared/exampleContent'

const topTask = exampleTopTask()

const meta = {
  title: 'Components/Navigation/Card',
  component: Card,
  args: {
    style: { maxWidth: '24rem' },
  },
  argTypes: {
    style: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>,
      <Paragraph key={2}>{topTask.description}</Paragraph>,
    ],
  },
}

export const WithTagline: Story = {
  args: {
    children: [
      <Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>,
      <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>,
    ],
  },
}

export const WithImage: Story = {
  args: {
    children: [
      <Card.Image alt="" aspectRatio="4:3" key={1} src="https://picsum.photos/480/360" />,
      <Card.HeadingGroup key={2} tagline="Nieuws">
        <Card.Heading level={3}>
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>,
      <Column gap="small" key={3}>
        <Paragraph>
          We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
        </Paragraph>
        <Paragraph size="small">{formatDate(Date.now())}</Paragraph>
      </Column>,
    ],
  },
}

export const TopTasks: Story = {
  args: {
    style: undefined,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Gemeentebelastingen</Card.Link>
          </Card.Heading>
          <Paragraph>
            Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
          </Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
          </Card.Heading>
          <Paragraph>U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
          </Card.Heading>
          <Paragraph>Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Onderwijs</Card.Link>
          </Card.Heading>
          <Paragraph>
            Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
          </Paragraph>
        </Card>
      </Grid.Cell>
    </Grid>
  ),
}
