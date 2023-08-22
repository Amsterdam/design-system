/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { UnorderedList } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Unordered List',
  component: UnorderedList,
  args: {
    children: [
      <UnorderedList.Item key={0}>
        Dit is het eerste niveau opsommingsteken.
        <UnorderedList>
          <UnorderedList.Item key={1.1}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
      <UnorderedList.Item key={1}>Dit is het eerste niveau opsommingsteken.</UnorderedList.Item>,
      <UnorderedList.Item key={2}>Dit is het eerste niveau opsommingsteken.</UnorderedList.Item>,
      <UnorderedList.Item key={3}>
        Dit is het eerste niveau opsommingsteken.
        <UnorderedList>
          <UnorderedList.Item key={1.1}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
    ],
  },
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {},
}
