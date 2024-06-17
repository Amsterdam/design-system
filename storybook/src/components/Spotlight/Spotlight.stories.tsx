/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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
