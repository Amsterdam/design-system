/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid } from '@amsterdam/design-system-react/src'
import type { GridCellProps } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { gridGapAndPaddingArgTypes } from '../../common'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  args: {
    paddingVertical: 'x-large',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    ...gridGapAndPaddingArgTypes,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>

export default meta

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

type Story = StoryObj<typeof meta>
type CellStory = StoryObj<typeof cellMeta>

const BackgroundGrid = () => (
  <Grid className="ams-docs-grid">
    {Array.from(Array(12).keys()).map((i) => (
      <Grid.Cell className="ams-docs-grid__cell" key={i} />
    ))}
  </Grid>
)

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <>
        <BackgroundGrid />
        <Story />
      </>
    ),
  ],
}

const CellStoryTemplate: CellStory = {
  decorators: [
    (Story) => (
      <>
        <BackgroundGrid />
        <Grid paddingVertical="x-large">
          <Story />
        </Grid>
      </>
    ),
  ],
  render: ({ children, ...args }) => <Grid.Cell {...args}>{children}</Grid.Cell>,
}

export const Default: Story = {
  ...StoryTemplate,
}

export const VerticalPadding: Story = {
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />,
  },
}

export const VerticalGap: Story = {
  ...StoryTemplate,
  args: {
    children: [
      <Grid.Cell className="ams-docs-item" key={1} span="all" />,
      <Grid.Cell className="ams-docs-item" key={2} span="all" />,
    ],
  },
}

export const SpanColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4,
  },
}

export const SpanResponsively: CellStory = {
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const SpanAllColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all',
  },
}

export const StartPosition: CellStory = {
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 3,
    start: { narrow: 2, medium: 4, wide: 6 },
  },
}

export const ImproveSemantics: CellStory = {
  ...CellStoryTemplate,
  args: {
    as: 'section',
  },
  render: ({ as }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />,
}
