/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as paginationMeta } from './Pagination.stories'

const meta = {
  ...paginationMeta,
  title: 'Components/Navigation/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Pagination, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
