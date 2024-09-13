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
    className: 'ams-docs-grid',
  },
  argTypes: {
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

const TwelveGridCells = Array.from(Array(12).keys()).map((i) => <Grid.Cell className="ams-docs-item" key={i} />)

export const Default: Story = {
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
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
    children: Array.from(Array(6).keys()).map((i) => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small',
  },
}

export const SpanMultipleColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4,
  },
}

export const ConfigureGridVariants: CellStory = {
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
    start: 2,
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
