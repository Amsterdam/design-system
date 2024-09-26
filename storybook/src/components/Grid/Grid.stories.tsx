/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
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
        type: 'radio',
        labels: { none: 'none', small: 'small', undefined: 'medium', large: 'large' },
      },
      options: ['none', 'small', undefined, 'large'],
    },
    paddingVertical: {
      control: {
        type: 'radio',
        labels: { undefined: 'none', small: 'small', medium: 'medium', large: 'large' },
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
    paddingTop: {
      control: {
        type: 'radio',
        labels: { undefined: 'none', small: 'small', medium: 'medium', large: 'large' },
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
    paddingBottom: {
      control: {
        type: 'radio',
        labels: { undefined: 'none', small: 'small', medium: 'medium', large: 'large' },
      },
      options: [undefined, 'small', 'medium', 'large'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>

export default meta

const cellMeta = {
  component: Grid.Cell,
  argTypes: {
    as: {
      control: { type: 'radio' },
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
      <Screen>
        <BackgroundGrid />
        <Story />
      </Screen>
    ),
  ],
}

const CellStoryTemplate: CellStory = {
  decorators: [
    (Story) => (
      <Screen>
        <BackgroundGrid />
        <Grid>
          <Story />
        </Grid>
      </Screen>
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
      <Grid.Cell className="ams-docs-item" span="all" key={1} />,
      <Grid.Cell className="ams-docs-item" span="all" key={2} />,
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
