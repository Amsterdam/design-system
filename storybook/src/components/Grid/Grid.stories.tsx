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

const TwelveGridCells = Array.from(Array(12).keys()).map((i) => <Grid.Cell className="ams-docs-pink-box" key={i} />)

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
    children: Array.from(Array(6).keys()).map((i) => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small',
  },
}

export const SpanMultipleColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4,
  },
}

export const ConfigureGridVariants: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const SpanAllColumns: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: (
      <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>
    ),
    span: 'all',
  },
}

export const StartPosition: CellStory = {
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
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
    <Grid.Cell as={as} span="all">
      <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element `{as}`.</p>
    </Grid.Cell>
  ),
}
