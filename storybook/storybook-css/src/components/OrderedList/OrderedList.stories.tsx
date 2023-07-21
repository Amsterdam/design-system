/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { OrderedList } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/dist/ordered-list/ordered-list.css'

const meta = {
  title: 'CSS Components/Ordered List',
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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<ol class="amsterdam-ordered-list">
  <li class="amsterdam-ordered-list__item">Dit is het eerste niveau opsommingsteken.
    <ol class="amsterdam-ordered-list">
      <li class="amsterdam-ordered-list__item">Dit is het tweede niveau opsommingsteken.</li>
    </ol>
  </li>
  <li class="amsterdam-ordered-list__item">Dit is het eerste niveau opsommingsteken.</li>
  <li class="amsterdam-ordered-list__item">Dit is het eerste niveau opsommingsteken.</li>
  <li class="amsterdam-ordered-list__item">Dit is het eerste niveau opsommingsteken.
    <ol class="amsterdam-ordered-list">
      <li class="amsterdam-ordered-list__item">Dit is het tweede niveau opsommingsteken.</li>
      <li class="amsterdam-ordered-list__item">Dit is het tweede niveau opsommingsteken.</li>
    </ol>
  </li>
</ol>
        `,
      },
    },
  },
}
