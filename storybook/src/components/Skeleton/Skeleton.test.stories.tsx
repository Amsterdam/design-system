/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as skeletonMeta } from './Skeleton.stories'

const meta = {
  ...skeletonMeta,
  title: 'Skeleton',
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Skeleton, { args }),
  tags: ['!dev', '!autodocs'],
}
