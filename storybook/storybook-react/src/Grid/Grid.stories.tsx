/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import type { GridCellProps, GridProps } from '@amsterdam/design-system-react'
import { Grid, Screen } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { paddingArgType } from '../shared/argTypes'

type StoryProps = GridProps & GridCellProps

const argTypes = {
  children: {
    table: { disable: true },
  },
}

const gridArgTypes = {
  compact: {
    control: { type: 'boolean' },
  },
  gapVertical: {
    control: {
      type: 'radio',
      labels: { small: 'small', undefined: 'medium', large: 'large' },
    },
    options: ['small', undefined, 'large'],
  },
  paddingVertical: paddingArgType,
  paddingTop: paddingArgType,
  paddingBottom: paddingArgType,
}

const gridCellArgTypes = {
  span: {
    control: { type: 'inline-radio' },
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  start: {
    control: { type: 'inline-radio' },
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
}

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  argTypes,
} satisfies Meta<StoryProps>

export default meta

const gridMeta = { ...meta }
const gridCellMeta = { ...meta, component: Grid.Cell }

type GridStory = StoryObj<typeof gridMeta>
type GridCellStory = StoryObj<typeof gridCellMeta>

const GridStoryTemplate: GridStory = {
  argTypes: gridArgTypes,
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
}

const GridCellStoryTemplate: GridCellStory = {
  argTypes: gridCellArgTypes,
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

export const Default: GridStory = {
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
  },
}

export const Compact: GridStory = {
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true,
  },
}

export const VerticalSpace: GridStory = {
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    paddingVertical: 'medium',
  },
}

export const VerticalGap: GridStory = {
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map((i) => (
      <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />
    )),
    gapVertical: 'small',
  },
}

export const SpanMultipleColumns: GridCellStory = {
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4,
  },
}

export const ConfigureGridVariants: GridCellStory = {
  ...GridCellStoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>
    ),
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const FullWidthCell: GridCellStory = {
  ...GridCellStoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>
    ),
    fullWidth: true,
  },
}

export const StartPosition: GridCellStory = {
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 2,
    start: 2,
  },
}
