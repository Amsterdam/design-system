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
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const LightBlue: Story = {
  args: {
    color: 'light-blue',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
    children: (
      <Grid>
        <Grid.Cell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </Grid.Cell>
      </Grid>
    ),
  },
}
