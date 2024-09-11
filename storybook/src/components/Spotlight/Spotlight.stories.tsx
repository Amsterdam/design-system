/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Blockquote, Grid, Image, Paragraph, Screen } from '@amsterdam/design-system-react/src'
import { Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph, exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
  render: ({ as, color }) => (
    <Spotlight as={as} color={color}>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Blockquote inverseColor={!color || !['green', 'yellow'].includes(color)}>{quote}</Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const StickOut: Story = {
  render: ({ as, color }) => (
    <Grid paddingBottom="medium">
      <Grid.Cell coverGap rowSpan={{ narrow: 2, medium: 2, wide: 1 }} rowStart={2} span="all">
        <Spotlight as={as} color={color} style={{ height: '100%' }} />
      </Grid.Cell>
      <Grid.Cell rowStart={{ narrow: 3, medium: 3, wide: 2 }} span={{ narrow: 4, medium: 8, wide: 6 }} start={1}>
        <Paragraph inverseColor={!color || !['green', 'yellow'].includes(color)}>{exampleParagraph()}</Paragraph>
      </Grid.Cell>
      <Grid.Cell
        rowSpan={2}
        rowStart={1}
        span={{ narrow: 4, medium: 8, wide: 6 }}
        start={{ narrow: 1, medium: 1, wide: 7 }}
        style={{ alignSelf: 'end' }}
      >
        <AspectRatio ratio="wide">
          <Image alt="" src="https://picsum.photos/960/720" />
        </AspectRatio>
      </Grid.Cell>
    </Grid>
  ),
}

export const Blue: Story = {
  args: {
    color: 'blue',
  },
}

export const DarkBlue: Story = {
  args: {
    color: 'dark-blue',
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

export const ImproveSemantics: Story = {
  args: {
    as: 'section',
  },
}
