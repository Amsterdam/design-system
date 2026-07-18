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
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the container, not those of the parts. Hence the descriptions below.
  argTypes: {
    aspectRatio: {
      control: 'select',
      description: 'The aspect ratio of the Image in this example.',
      options: aspectRatioOptions,
    },
    headingLines: {
      control: { min: 1, step: 1, type: 'number' },
      description: 'The number of lines the Heading in this example spans.',
    },
    paragraphLines: {
      control: { min: 1, step: 1, type: 'number' },
      description: 'The number of lines the Paragraph in this example spans.',
    },
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
