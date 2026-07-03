/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [<Skeleton.Image key={1} />, <Skeleton.Heading key={2} />, <Skeleton.Paragraph key={3} />],
  },
  decorators: [maximiseInlineSize('24rem')],
}

export const Heading: StoryObj<{ lines: number }> = {
  args: { lines: 1 },
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

export const Image: Story = {
  args: { children: <Skeleton.Image /> },
  decorators: [maximiseInlineSize('24rem')],
}
