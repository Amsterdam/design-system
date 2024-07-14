/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Link } from '@amsterdam/design-system-react'
import {
  AspectRatio,
  Blockquote,
  Column,
  Grid,
  Image,
  Paragraph,
  Screen,
  Spotlight,
} from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph, exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const image = 'https://picsum.photos/1600/1600'

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  render: ({ as, color }) => (
    <Spotlight as={as} color={color}>
      <Grid paddingVertical="medium">
        <Grid.Cell colspan="all">
          <Blockquote inverseColor={!color || !['green', 'yellow'].includes(color)}>{quote}</Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
  decorators: [
    (Story) => (
      <Screen maxWidth="wide">
        <Story cover />
      </Screen>
    ),
  ],
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Blue: Story = {
  args: {
    color: 'blue',
  },
}

export const LightBlue: Story = {
  args: {
    color: 'light-blue',
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
  },
}

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const CustomTagName: Story = {
  args: {
    as: 'section',
  },
}

export const BreakoutWideAspect: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'blue',
    gradient: true,
  },
  render: ({ as, color, gradient }) => (
    <Spotlight as={as} color={color} gradient={gradient}>
      <Grid paddingVertical="medium">
        <Grid.Cell colspan="all">
          <Column gap="medium">
            <AspectRatio ratio="wide">
              <Image alt="" src={image} cover />
            </AspectRatio>
            <Paragraph size="small" inverseColor={!color || !['green', 'yellow'].includes(color)}>
              {exampleParagraph()}
            </Paragraph>
          </Column>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
}

export const BreakoutWideAspectAndText: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'blue',
    gradient: true,
  },
  render: ({ as, color, gradient }) => (
    <Spotlight as={as} color={color} gradient={gradient}>
      <Grid paddingVertical="medium" rows={2}>
        <Grid.Cell
          colspan={{ narrow: 4, medium: 4, wide: 5 }}
          row={{ narrow: 1, medium: 1, wide: 1 }}
          rowspan={{ narrow: 1, medium: 2, wide: 2 }}
        >
          <Column gap="medium">
            <AspectRatio ratio="wide">
              <Image alt="" src={image} cover />
            </AspectRatio>
          </Column>
        </Grid.Cell>
        <Grid.Cell
          start={{ narrow: 1, medium: 1, wide: 2 }}
          colspan={{ narrow: 4, medium: 4, wide: 5 }}
          row={{ narrow: 2, medium: 2, wide: 2 }}
          rowspan={{ narrow: 1, medium: 1, wide: 1 }}
        >
          <Column gap="medium">
            <Heading level={2} inverseColor>
              Projecten op de kaart
            </Heading>
            <Paragraph inverseColor>
              Overzicht van ruim 200 projecten in Amsterdam. Lees waar en wanneer we werken aan nieuwbouw, groot
              onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden. En hoe
              u kunt meedenken. Ga naar de kaart om een project in de stad te zien.
            </Paragraph>
            <Link variant="standalone" href="#" onClick={(e) => e.preventDefault} onBackground="dark">
              Bekijk de projectenkaart
            </Link>
          </Column>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
}

export const BreakoutXWideAspect: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: 'blue',
    gradient: true,
  },
  render: ({ as, color, gradient }) => (
    <Spotlight as={as} color={color} gradient={gradient}>
      <Grid paddingVertical="medium">
        <Grid.Cell colspan="all">
          <Column gap="medium">
            <AspectRatio ratio="x-wide">
              <Image alt="" src={image} cover />
            </AspectRatio>
            <Paragraph size="small" inverseColor={!color || !['green', 'yellow'].includes(color)}>
              {exampleParagraph()}
            </Paragraph>
          </Column>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
}
