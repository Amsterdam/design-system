/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Column, Grid, Paragraph } from '@amsterdam/design-system-react'
import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { exampleTopTask } from '../../_common/exampleContent'
import { formatDate } from '../../_common/formatDate'

const topTask = exampleTopTask()

const maxInlineSizeDecorator: Decorator = (Story) => (
  <div style={{ maxInlineSize: '24rem' }}>
    <Story />
  </div>
)

const meta = {
  title: 'Components/Navigation/Card',
  component: Card,
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
  decorators: [maxInlineSizeDecorator],
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
  decorators: [maxInlineSizeDecorator],
}

type WithImageProps = {
  aspectRatio: (typeof aspectRatioOptions)[number]
  date: string
  heading: string
  imageSrc: string
  tagline: string
  text: string
} & Readonly<ComponentProps<typeof Card>>

type WithImageStory = StoryObj<WithImageProps>

export const WithImage: WithImageStory = {
  args: {
    aspectRatio: '4:3',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/480/360',
    tagline: 'Nieuws',
    text: 'We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.',
  },
  argTypes: {
    aspectRatio: {
      control: { type: 'inline-radio' },
      options: aspectRatioOptions,
    },
    date: { control: 'text' },
    heading: { control: 'text' },
    imageSrc: { control: 'text' },
    tagline: { control: 'text' },
    text: { control: 'text' },
  },
  decorators: [maxInlineSizeDecorator],
  render: ({ aspectRatio, date, heading, imageSrc, tagline, text, ...args }) => (
    <Card {...args}>
      <Card.Image alt="" aspectRatio={aspectRatio} src={imageSrc} />
      <Card.HeadingGroup tagline={tagline}>
        <Card.Heading level={3}>
          <Card.Link href="/">{heading}</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>
      <Column gap="small">
        <Paragraph>{text}</Paragraph>
        <Paragraph size="small">{date}</Paragraph>
      </Column>
    </Card>
  ),
}

export const TopTasks: Story = {
  args: {
    style: undefined,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card {...args}>
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
