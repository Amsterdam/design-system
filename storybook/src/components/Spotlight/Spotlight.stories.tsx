/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Column, Heading, Image, Link, Paragraph, Screen } from '@amsterdam/design-system-react'
import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading, exampleParagraph, exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

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
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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

export const CustomTagName: Story = {
  args: {
    as: 'section',
  },
}

export const DarkBlueBreakout: Story = {
  args: {
    color: 'dark-blue',
    breakout: true,
  },
  render: ({ as, color, breakout }) => (
    <Screen>
      <Spotlight as={as} color={color} breakout={breakout}>
        <Grid paddingVertical="medium">
          <Grid.Cell start={{ narrow: 1, medium: 2, wide: 2 }} span={{ narrow: 4, medium: 6, wide: 10 }}>
            <Column gap="medium">
              <AspectRatio ratio="wide">
                <Image src="https://picsum.photos/960/720" alt="" cover style={{ width: '100%', height: '100%' }} />
              </AspectRatio>
              <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
            </Column>
          </Grid.Cell>
        </Grid>
      </Spotlight>
    </Screen>
  ),
}

export const DarkBlueBreakoutComplex: Story = {
  args: {
    color: 'dark-blue',
    breakout: true,
  },
  render: ({ as, color, breakout }) => (
    <Screen>
      <Spotlight as={as} color={color} breakout={breakout}>
        <Grid paddingVertical="medium">
          <Grid.Cell start={{ narrow: 1, medium: 2, wide: 1 }} span={{ narrow: 4, medium: 6, wide: 6 }}>
            <Column gap="medium">
              <Heading level={3} inverseColor>
                {exampleHeading()}
              </Heading>
              <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
              <Link variant="standalone" href="#" onBackground="dark">
                Lees meer
              </Link>
            </Column>
          </Grid.Cell>
          <Grid.Cell start={{ narrow: 1, medium: 2, wide: 7 }} span={{ narrow: 4, medium: 6, wide: 6 }}>
            <Column gap="medium">
              <AspectRatio ratio="wide">
                <Image src="https://picsum.photos/960/720" alt="" cover style={{ width: '100%', height: '100%' }} />
              </AspectRatio>
            </Column>
          </Grid.Cell>
        </Grid>
      </Spotlight>
    </Screen>
  ),
}
