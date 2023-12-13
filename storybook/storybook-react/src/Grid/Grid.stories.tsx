/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import type { GridColumnNumber, GridColumnNumbers, GridProps } from '@amsterdam/design-system-react'
import { Grid, Screen } from '@amsterdam/design-system-react'
import { Meta } from '@storybook/react'
import { paddingArgType } from '../shared/argTypes'

type ExtraProps = {
  start?: GridColumnNumber | GridColumnNumbers
  span?: GridColumnNumber | GridColumnNumbers
  fullWidth?: boolean
}
type StoryProps = GridProps & ExtraProps

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
  start: {
    control: { type: 'inline-radio' },
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  span: {
    control: { type: 'inline-radio' },
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
}

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  decorators: [
    (Story: any) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
  argTypes: {
    ...gridArgTypes,
    ...gridCellArgTypes,
  },
} satisfies Meta<StoryProps>

export default meta

export const Default = {
  args: {
    start: 1,
    span: 12,
  },
  render: ({ span, start, ...args }: StoryProps) => (
    <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        {`Start: ${start}, span: ${span}`}
      </Grid.Cell>
    </Grid>
  ),
}

export const Compact = {
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true,
  },
}

export const VerticalSpace = {
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    paddingVertical: 'medium',
  },
}

export const VerticalGap = {
  args: {
    children: Array.from(Array(6).keys()).map((i) => (
      <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />
    )),
    gapVertical: 'small',
  },
}

export const SpanMultipleColumns = {
  args: {
    span: 4,
  },
  render: ({ span, start, ...args }: StoryProps) => (
    <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel beslaat 4 kolommen.
      </Grid.Cell>
    </Grid>
  ),
}

export const ConfigureGridVariants = {
  args: {
    span: { narrow: 4, medium: 6, wide: 8 },
  },
  render: ({ span, start, ...args }: StoryProps) => (
    <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel heeft 3 instellingen voor de breedte.
      </Grid.Cell>
    </Grid>
  ),
}

export const FullWidthCell = {
  args: {
    fullWidth: true,
  },
  render: ({ span, start, fullWidth, ...args }: StoryProps) => (
    <Grid {...args}>
      <Grid.Cell
        className="amsterdam-docs-pink-box amsterdam-docs-paragraph"
        span={span}
        start={start}
        fullWidth={fullWidth}
      >
        Deze cel beslaat de volledige breedte van het grid.
      </Grid.Cell>
    </Grid>
  ),
}

export const StartPosition = {
  args: {
    span: 2,
    start: 2,
  },
  render: ({ span, start, ...args }: StoryProps) => (
    <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel start in kolom 2.
      </Grid.Cell>
    </Grid>
  ),
}
