/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote, GridCell, Highlight, PageGrid } from '@amsterdam/design-system-react'
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
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const LightBlue: Story = {
  args: {
    color: 'light-blue',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
    children: (
      <PageGrid>
        <GridCell fullWidth>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>
    ),
  },
}
