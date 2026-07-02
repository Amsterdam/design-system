/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Grid } from '@amsterdam/design-system-react/src'

import { GridColumnsGuide } from '#storybook/_components/GridColumnsGuide/GridColumnsGuide'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid.Cell,
  argTypes: {
    appearance: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'flush', 'transparent'],
    },
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
    },
    span: {
      control: { max: 12, min: 1, type: 'number' },
    },
    start: {
      control: { max: 12, min: 1, type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GridColumnsGuide />
        <Grid paddingVertical="x-large">
          <Story />
        </Grid>
      </>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  render: ({ children, ...args }) => <Grid.Cell {...args}>{children}</Grid.Cell>,
} satisfies Meta<typeof Grid.Cell>

export default meta

type Story = StoryObj<typeof meta>

// Typing example stories against a minimal meta keeps the union of `span` and `start` values intact.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cellMeta = {
  component: Grid.Cell,
  argTypes: {
    span: {
      control: { max: 12, min: 1, type: 'number' },
    },
    start: {
      control: { max: 12, min: 1, type: 'number' },
    },
  },
} satisfies Meta<typeof Grid.Cell>

type CellStory = StoryObj<typeof cellMeta>

export const Cell: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: { children: <Paragraph>Cell content</Paragraph>, span: 4 } as any,
}

export const SpanColumns: CellStory = {
  args: {
    className: '_ams-item',
    span: 4,
  },
}

export const SpanResponsively: CellStory = {
  args: {
    className: '_ams-item',
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const SpanAllColumns: CellStory = {
  args: {
    className: '_ams-item',
    span: 'all',
  },
}

export const StartPosition: CellStory = {
  args: {
    className: '_ams-item',
    span: 3,
    start: { narrow: 2, medium: 4, wide: 6 },
  },
}

export const ImproveSemantics: CellStory = {
  args: {
    as: 'section',
    className: '_ams-item',
    span: 'all',
  },
}
