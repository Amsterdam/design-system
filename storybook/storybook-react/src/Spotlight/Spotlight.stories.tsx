/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleQuote } from '../shared/exampleContent'

const meta = {
  title: 'Containers/Spotlight',
  component: Spotlight,
  argTypes: {
    as: {
      control: { type: 'inline-radio' },
      options: ['article', 'aside', 'div', 'footer', 'section'],
    },
    color: {
      options: ['blue', 'dark-green', 'green', 'light-blue', 'magenta', 'orange', 'purple', 'yellow'],
      control: {
        type: 'radio',
        labels: {
          blue: 'Blauw',
          'dark-green': 'Donkergroen',
          green: 'Groen',
          'light-blue': 'Lichtblauw',
          magenta: 'Magenta',
          orange: 'Oranje',
          purple: 'Paars',
          yellow: 'Geel',
        },
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  render: ({ as, color }) => (
    <Spotlight as={as} color={color}>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Blockquote inverseColor={!color || !['green', 'yellow'].includes(color)}>{exampleQuote()}</Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
  },
}

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

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
  },
}

export const CustomTagName: Story = {
  args: {
    as: 'section',
  },
}
