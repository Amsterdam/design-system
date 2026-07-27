/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton.Table,
  argTypes: {
    columns: { control: { min: 1, step: 1, type: 'number' } },
    rows: { control: { min: 1, step: 1, type: 'number' } },
  },
  render: (args) => (
    <Skeleton>
      <Skeleton.Table {...args} />
    </Skeleton>
  ),
  tags: ['!manifest'],
} satisfies Meta<typeof Skeleton.Table>

export default meta

type Story = StoryObj<typeof meta>

export const Table: Story = {
  args: { columns: 3, rows: 3 },
}
