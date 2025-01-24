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
    maxVisiblePages: 7,
    page: 1,
    totalPages: 10,
  },
  argTypes: {
    onPageChange: { action: 'page changed' },
    page: {
      control: {
        min: 1,
        type: 'number',
      },
    },
  },
  decorators: [
    // Wrap the story in a div with a key, to force a rerender when the 'page' arg changes
    (Story, { args }) => (
      <div id="ams-docs-custom-root" key={JSON.stringify(args)}>
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
