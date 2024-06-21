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
        <Grid.Cell span="all">
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

export const GradientXTallAspect: Story = {
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
        <Grid.Cell span="all">
          <Column gap="medium">
            <AspectRatio ratio="x-tall">
              <Image alt="" src="https://picsum.photos/1440/2560" cover />
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

export const GradientTallAspect: Story = {
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
        <Grid.Cell span="all">
          <Column gap="medium">
            <AspectRatio ratio="tall">
              <Image alt="" src="https://picsum.photos/1200/1600" cover />
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

export const GradientSquareAspect: Story = {
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
        <Grid.Cell span="all">
          <Column gap="medium">
            <AspectRatio ratio="square">
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

export const GradientWideAspect: Story = {
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
        <Grid.Cell span="all">
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

export const GradientXWideAspect: Story = {
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
        <Grid.Cell span="all">
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

export const Gradient2XWideAspect: Story = {
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
        <Grid.Cell span="all">
          <Column gap="medium">
            <AspectRatio ratio="2x-wide">
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

export const GradientTallAspectWithText: Story = {
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
        <Grid.Cell start={{ narrow: 1, medium: 1, wide: 2 }} span={{ narrow: 4, medium: 4, wide: 5 }}>
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
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <AspectRatio ratio="tall">
            <Image alt="" src="https://picsum.photos/1200/1600" cover style={{ width: '100%', height: '100%' }} />
          </AspectRatio>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
}
