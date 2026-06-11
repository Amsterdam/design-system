/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrderedList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Text/Ordered List',
  component: OrderedList.Item,
  decorators: [
    (Story) => (
      <OrderedList>
        <Story />
      </OrderedList>
    ),
  ],
} satisfies Meta<typeof OrderedList.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {
  args: {
    children: 'Zorg voor een duidelijke schrijfopdracht.',
  },
}
