/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Badge, Heading, OrderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    children: 'Tip',
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['blue', 'dark-blue', 'green', 'dark-green', 'orange', 'magenta', 'purple', 'yellow'],
      selected: 'dark-green',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InList: Story = {
  decorators: [
    (Story) => (
      <div>
        <Heading level={4}>Verwerkingstijd en data</Heading>
        <OrderedList>
          <OrderedList.Item>Binnen Amsterdam op werkdagen binnen 24 uur.</OrderedList.Item>
          <OrderedList.Item>
            Vanuit een andere gemeente ongeveer 5 werkdagen.
            <br />
            <Story /> Geeft u uw verhuizing vantevoren door, dan wordt uw melding bewaard tot de verhuisdatum. Dan pas
            begint de termijn van 24 uur of 5 werkdagen.
          </OrderedList.Item>
          <OrderedList.Item>
            Een verhuizing doorgeven kan 4 weken van tevoren en maximaal 5 dagen erna. Geeft u het later door? Dan wordt
            de dag van doorgeven de verhuisdatum.
          </OrderedList.Item>
        </OrderedList>
      </div>
    ),
  ],
}
