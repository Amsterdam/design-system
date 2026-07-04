/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'

import { default as skeletonMeta } from './Skeleton.stories'

const meta = {
  ...skeletonMeta,
  title: 'Components/Feedback/Skeleton',
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--ams-space-l)', maxInlineSize: '24rem' }}>
      <Skeleton>
        <Skeleton.Image />
        <Skeleton.Heading lines={2} />
        <Skeleton.Paragraph />
      </Skeleton>
      <Skeleton>
        <Skeleton.List />
      </Skeleton>
      <Skeleton>
        <Skeleton.Table />
      </Skeleton>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
