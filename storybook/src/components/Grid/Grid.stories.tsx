/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid } from '@amsterdam/design-system-react/src'
import type { GridCellProps } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  args: {
    gapVertical: undefined /* Keeps this prop at the top of the Controls table. */,
    paddingVertical: 'medium',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    gapVertical: {
      control: {
        labels: { large: 'large', none: 'none', small: 'small', undefined: 'medium' },
        type: 'radio',
      },
      options: ['none', 'small', undefined, 'large'],
    },
    paddingBottom: {
      control: {
        labels: { large: 'large', medium: 'medium', small: 'small', undefined: 'none' },
        type: 'radio',
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
    paddingTop: {
      control: {
        labels: { large: 'large', medium: 'medium', small: 'small', undefined: 'none' },
        type: 'radio',
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
    paddingVertical: {
      control: {
        labels: { large: 'large', medium: 'medium', small: 'small', undefined: 'none' },
        type: 'radio',
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
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
        <Grid paddingVertical="medium">
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
    gapVertical: 'small',
  },
}

export const SpanColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4,
  },
}

export const SpanResponsively: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const SpanAllColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all',
  },
}

export const StartPosition: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: { narrow: 2, medium: 4, wide: 6 },
  },
}

export const ImproveSemantics: CellStory = {
  ...CellStoryTemplate,
  args: {
    as: 'section',
  },
  render: ({ as }: GridCellProps) => (
    <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
  ),
}
