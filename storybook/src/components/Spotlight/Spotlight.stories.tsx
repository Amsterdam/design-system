/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  argTypes: {
    as: {
      control: {
        type: 'radio',
      },
      options: ['article', 'aside', 'div', 'footer', 'section'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'dark-blue', 'dark-green', 'green', 'magenta', 'orange', 'purple', 'yellow'],
    },
  },
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
