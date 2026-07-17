/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton.Heading,
  argTypes: {
    lines: { control: { min: 1, step: 1, type: 'number' } },
  },
  render: (args) => (
    <Skeleton>
      <Skeleton.Heading {...args} />
    </Skeleton>
  ),
} satisfies Meta<typeof Skeleton.Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading: Story = {
  args: { lines: 2 },
}
