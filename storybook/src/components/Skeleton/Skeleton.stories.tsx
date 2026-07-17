/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Skeleton } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta

type DefaultProps = {
  aspectRatio: (typeof aspectRatioOptions)[number]
  headingLines: number
  paragraphLines: number
} & Readonly<ComponentProps<typeof Skeleton>>

type DefaultStory = StoryObj<DefaultProps>

export const Default: DefaultStory = {
  args: {
    aspectRatio: '16:9',
    headingLines: 1,
    paragraphLines: 3,
  },
  // These argTypes describe flattened args specific to this composed story; the meta cannot provide them.
  argTypes: {
    aspectRatio: { control: 'select', options: aspectRatioOptions },
    headingLines: { control: { min: 1, step: 1, type: 'number' } },
    paragraphLines: { control: { min: 1, step: 1, type: 'number' } },
  },
  decorators: [maximiseInlineSize('24rem')],
  render: ({ aspectRatio, headingLines, paragraphLines, ...args }) => (
    <Skeleton {...args}>
      <Skeleton.Image aspectRatio={aspectRatio} />
      <Skeleton.Heading lines={headingLines} />
      <Skeleton.Paragraph lines={paragraphLines} />
    </Skeleton>
  ),
}

export const Heading: StoryObj<{ lines: number }> = {
  args: { lines: 2 },
  argTypes: { lines: { control: { min: 1, step: 1, type: 'number' } } },
  render: ({ lines }) => (
    <Skeleton>
      <Skeleton.Heading lines={lines} />
    </Skeleton>
  ),
}

export const Paragraph: StoryObj<{ lines: number }> = {
  args: { lines: 3 },
  argTypes: { lines: { control: { min: 1, step: 1, type: 'number' } } },
  render: ({ lines }) => (
    <Skeleton>
      <Skeleton.Paragraph lines={lines} />
    </Skeleton>
  ),
}

export const List: StoryObj<{ lines: number }> = {
  args: { lines: 3 },
  argTypes: { lines: { control: { min: 1, step: 1, type: 'number' } } },
  render: ({ lines }) => (
    <Skeleton>
      <Skeleton.List lines={lines} />
    </Skeleton>
  ),
}

export const Table: StoryObj<{ columns: number; rows: number }> = {
  args: { columns: 3, rows: 3 },
  argTypes: {
    columns: { control: { min: 1, step: 1, type: 'number' } },
    rows: { control: { min: 1, step: 1, type: 'number' } },
  },
  render: ({ columns, rows }) => (
    <Skeleton>
      <Skeleton.Table columns={columns} rows={rows} />
    </Skeleton>
  ),
}

export const Image: StoryObj<{ aspectRatio: (typeof aspectRatioOptions)[number] }> = {
  args: { aspectRatio: '16:9' },
  argTypes: { aspectRatio: { control: 'select', options: aspectRatioOptions } },
  decorators: [maximiseInlineSize('24rem')],
  render: ({ aspectRatio }) => (
    <Skeleton>
      <Skeleton.Image aspectRatio={aspectRatio} />
    </Skeleton>
  ),
}
