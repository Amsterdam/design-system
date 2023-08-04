/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { OrderedList } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Ordered List',
  component: OrderedList,
  args: {
    children: [
      <OrderedList.Item key={0}>
        Dit is het eerste niveau opsommingsteken.
        <OrderedList>
          <OrderedList.Item key={0.1}>Dit is het tweede niveau opsommingsteken.</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
      <OrderedList.Item key={1}>Dit is het eerste niveau opsommingsteken.</OrderedList.Item>,
      <OrderedList.Item key={2}>Dit is het eerste niveau opsommingsteken.</OrderedList.Item>,
      <OrderedList.Item key={3}>
        Dit is het eerste niveau opsommingsteken.
        <OrderedList>
          <OrderedList.Item key={3.1}>Dit is het tweede niveau opsommingsteken.</OrderedList.Item>
          <OrderedList.Item key={3.2}>Dit is het tweede niveau opsommingsteken.</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
    ],
  },
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
