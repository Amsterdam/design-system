/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Pagination } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  args: {
    page: 1,
    maxVisiblePages: 7,
    totalPages: 10,
  },
  argTypes: { onPageChange: { action: 'page changed' } },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
