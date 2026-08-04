/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Column, Grid, Paragraph } from '@amsterdam/design-system-react'
import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize, wrapInInlineSizeQueryContainer } from '#storybook/_common/decorators'
import { formatDate } from '#storybook/_common/formatDate'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card,
  subcomponents: {
    'Card.Heading': Card.Heading,
    'Card.HeadingGroup': Card.HeadingGroup,
    'Card.Image': Card.Image,
    'Card.Link': Card.Link,
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

type DefaultProps = {
  aspectRatio: (typeof aspectRatioOptions)[number]
  date: string
  heading: string
  imageSrc: string
  tagline: string
  text: string
} & Readonly<ComponentProps<typeof Card>>

type DefaultStory = StoryObj<DefaultProps>

export const Default: DefaultStory = {
  args: {
    aspectRatio: '16:9',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/480/360',
    tagline: 'Nieuws',
    text: 'We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.',
  },
  // These argTypes describe flattened args specific to this composed story; the meta cannot provide them.
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: aspectRatioOptions,
    },
    date: { control: 'text' },
    heading: { control: 'text' },
    imageSrc: { control: 'text' },
    tagline: { control: 'text' },
    text: { control: 'text' },
  },
  // The query container keeps this Card below the width at which it would switch to a horizontal layout.
  decorators: [wrapInInlineSizeQueryContainer(), maximiseInlineSize('24rem')],
  render: ({ aspectRatio, date, heading, imageSrc, tagline, text, ...args }) => (
    <Card {...args}>
      <Card.Image alt="" aspectRatio={aspectRatio} src={imageSrc} />
      <Card.Content>
        <Card.HeadingGroup tagline={tagline}>
          <Card.Heading level={3}>
            <Card.Link href="/">{heading}</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Column gap="small">
          <Paragraph>{text}</Paragraph>
          <Paragraph size="small">{date}</Paragraph>
        </Column>
      </Card.Content>
    </Card>
  ),
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
  decorators: [maximiseInlineSize('24rem')],
}

/**
 * A Card that pairs an image with a Card Content switches to a horizontal layout once its container is wider
 * than 36rem. Resize the container to see it change; the markup is the same in both layouts.
 */
export const HorizontalLayout: DefaultStory = {
  args: Default.args,
  argTypes: Default.argTypes,
  decorators: [wrapInInlineSizeQueryContainer(undefined, { inlineSize: '56rem', maxInlineSize: '100%' })],
  render: Default.render,
}

export const TopTasks: Story = {
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
