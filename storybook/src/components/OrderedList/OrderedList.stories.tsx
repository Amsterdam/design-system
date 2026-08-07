/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrderedList } from '@amsterdam/design-system-react/src'

import { inverseColorArgType, textSizeArgType } from '#storybook/_common/argTypes'
import { exampleOrderedList } from '#storybook/_common/exampleContent'

const orderedListItems = exampleOrderedList().map((text) => <OrderedList.Item key={text}>{text}</OrderedList.Item>)

const meta = {
  title: 'Components/Text/Ordered List',
  component: OrderedList,
  args: {
    children: orderedListItems,
  },
  argTypes: {
    color: inverseColorArgType,
    reversed: {
      control: 'boolean',
      description: 'Numbers the items from the highest value down.',
    },
    size: textSizeArgType(['small', undefined]),
    start: {
      control: 'number',
      description: 'The value for the first list item’s marker.',
    },
  },
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoLevels: Story = {
  render: (args) => (
    <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
      <OrderedList.Item>
        Stadsdeel Nieuw-West
        <OrderedList {...args}>
          <OrderedList.Item>De Aker, Sloten en Nieuw Sloten</OrderedList.Item>
          <OrderedList.Item>Geuzenveld, Slotermeer en Sloterdijken</OrderedList.Item>
          <OrderedList.Item>Osdorp</OrderedList.Item>
          <OrderedList.Item>Slotervaart</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
  ),
}

export const StartingNumber: Story = {
  args: {
    children: [
      <OrderedList.Item key={6}>Zes</OrderedList.Item>,
      <OrderedList.Item key={7}>Zeven</OrderedList.Item>,
      <OrderedList.Item key={8}>Acht</OrderedList.Item>,
    ],
    start: 6,
  },
}

export const DescendingNumbers: Story = {
  args: {
    children: [
      <OrderedList.Item key={3}>Drie</OrderedList.Item>,
      <OrderedList.Item key={2}>Twee</OrderedList.Item>,
      <OrderedList.Item key={1}>Eén</OrderedList.Item>,
    ],
    reversed: true,
    start: 3,
  },
}

export const InverseColor: Story = {
  args: {
    color: 'inverse',
  },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
  ),
}

export const SmallText: Story = {
  args: {
    size: 'small',
  },
}
