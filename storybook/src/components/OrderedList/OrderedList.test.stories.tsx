/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrderedList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as orderedListMeta } from './OrderedList.stories'

const meta = {
  ...orderedListMeta,
  title: 'Components/Text/Ordered List',
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <OrderedList.Item key={1}>Ervaring is niet noodzakelijk.</OrderedList.Item>,
      <OrderedList.Item key={2}>
        Er is veel werk in diverse functies, zoals monteur of timmerman. Er zijn ook banen op kantoor, zoals
        werkvoorbereider of engineer.
      </OrderedList.Item>,
      <OrderedList.Item key={3}>Deze banen bieden stabiliteit en zekerheid.</OrderedList.Item>,
      <OrderedList.Item key={4}>Er blijft altijd vraag naar werknemers in de bouw en techniek.</OrderedList.Item>,
      <OrderedList.Item key={5}>
        Er zijn veel mogelijkheden in de bouw, infrastructuur, haven en groenvoorziening.
      </OrderedList.Item>,
    ],
  },
  render: (args) =>
    renderComponentVariants(OrderedList, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
