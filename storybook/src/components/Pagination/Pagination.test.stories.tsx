/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as paginationMeta } from './Pagination.stories'

const meta = {
  ...paginationMeta,
  title: 'Components/Navigation/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Pagination, { args }),
  tags: ['!dev', '!autodocs'],
}
