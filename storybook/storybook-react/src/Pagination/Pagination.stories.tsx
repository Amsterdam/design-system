/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Pagination } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Pagination',
  component: Pagination,
  args: {
    collectionSize: 100,
    page: 1,
    pageSize: 10,
    maxVisiblePages: 7,
  },
  argTypes: { onPageChange: { action: 'page changed' } },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
