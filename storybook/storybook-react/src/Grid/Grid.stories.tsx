/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Screen } from '@amsterdam/design-system-react'
import type { GridCellProps } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { paddingArgType } from '../shared/argTypes'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    children: {
      table: { disable: true },
    },
    compact: {
      control: { type: 'boolean' },
    },
    gapVertical: {
      control: {
        type: 'radio',
        labels: { none: 'none', small: 'small', undefined: 'medium', large: 'large' },
      },
      options: ['none', 'small', undefined, 'large'],
    },
    paddingVertical: paddingArgType,
    paddingTop: paddingArgType,
    paddingBottom: paddingArgType,
  },
} satisfies Meta<typeof Grid>

export default meta

const cellMeta = {
  component: Grid.Cell,
  argTypes: {
    children: {
      table: { disable: true },
    },
    as: {
      control: { type: 'inline-radio' },
      options: ['article', 'div', 'section'],
    },
    span: {
      control: { type: 'number', min: 1, max: 12 },
    },
    start: {
      control: { type: 'number', min: 1, max: 12 },
    },
  },
} satisfies Meta<typeof Grid.Cell>

type Story = StoryObj<typeof meta>
type CellStory = StoryObj<typeof cellMeta>

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
}

const CellStoryTemplate: CellStory = {
  decorators: [
    (Story) => (
      <Screen>
        <Grid>
          <Story />
        </Grid>
      </Screen>
    ),
  ],
  render: ({ children, ...args }) => <Grid.Cell {...args}>{children}</Grid.Cell>,
}

const TwelveGridCells = Array.from(Array(12).keys()).map((i) => (
  <Grid.Cell className="amsterdam-docs-pink-box" key={i} />
))

export const Default: Story = {
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
  },
}

export const Compact: Story = {
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    compact: true,
  },
}

export const VerticalSpace: Story = {
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium',
  },
}

export const VerticalGap: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map((i) => (
      <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />
    )),
    gapVertical: 'small',
  },
}

export const SpanMultipleColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4,
  },
}

export const ConfigureGridVariants: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>
    ),
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const SpanAllColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>
    ),
    span: 'all',
  },
}

export const StartPosition: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2,
  },
}

export const CustomTagName: CellStory = {
  ...CellStoryTemplate,
  args: {
    as: 'section',
  },
  render: ({ as }: GridCellProps) => (
    <Grid>
      <Grid.Cell as={as} span="all">
        <p className="amsterdam-docs-pink-box amsterdam-docs-paragraph">Deze cel gebruikt het HTML-element `{as}`.</p>
      </Grid.Cell>
    </Grid>
  ),
}
