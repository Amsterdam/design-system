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
  argTypes: {
    onPageChange: { action: 'page changed' },
    page: {
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
  decorators: [
    // Wrap the story in a div with a key, to force a rerender when the 'page' arg changes
    (Story, { args }) => (
      <div key={JSON.stringify(args)} id="ams-docs-custom-root">
        <Story />
      </div>
    ),
  ],
  parameters: {
    html: {
      root: '#ams-docs-custom-root',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
