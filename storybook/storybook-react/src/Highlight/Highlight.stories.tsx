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
      options: ['yellow', 'orange', 'magenta', 'purple', 'blue', 'light-blue', 'green', 'dark-green'],
      control: {
        type: 'radio',
        labels: {
          yellow: 'Geel',
          orange: 'Oranje',
          magenta: 'Magenta',
          purple: 'Paars',
          blue: 'Blauw',
          'light-blue': 'Lichtblauw',
          green: 'Groen',
          'dark-green': 'Donkergroen',
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

export const Yellow: Story = {
  args: {
    color: 'yellow',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const LightBlue: Story = {
  args: {
    color: 'light-blue',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
    children: [
      <PageGrid key={1}>
        <GridCell key={1} gridColumns={{ start: 3, span: 8 }}>
          <Blockquote inverseColor>
            We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te
            sporten. Buitenspelen zou een vak moeten zijn op school.
          </Blockquote>
        </GridCell>
      </PageGrid>,
    ],
  },
}
