/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote, Grid, Highlight } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Highlight',
  component: Highlight,
  argTypes: {
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
  render: ({ color }) => (
    <Highlight color={color}>
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor={!color || !['green', 'yellow'].includes(color)}>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    </Highlight>
  ),
} satisfies Meta<typeof Highlight>

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
