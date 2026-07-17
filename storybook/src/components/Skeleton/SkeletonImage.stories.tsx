/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton.Image,
  argTypes: {
    aspectRatio: { control: 'select', options: aspectRatioOptions },
  },
  decorators: [maximiseInlineSize('24rem')],
  render: (args) => (
    <Skeleton>
      <Skeleton.Image {...args} />
    </Skeleton>
  ),
} satisfies Meta<typeof Skeleton.Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: { aspectRatio: '16:9' },
}
