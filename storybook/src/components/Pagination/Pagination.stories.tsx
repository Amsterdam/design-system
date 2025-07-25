/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Pagination } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  args: {
    linkTemplate: (page) => `#?pagina=${page}`,
    maxVisiblePages: 7,
    page: 1,
    totalPages: 10,
  },
  argTypes: {
    page: {
      control: {
        min: 1,
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
