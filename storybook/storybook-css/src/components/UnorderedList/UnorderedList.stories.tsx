/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { UnorderedList, UnorderedListItem } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/unordered-list/unordered-list.scss'

const meta = {
  title: 'CSS Components/UnorderedList',
  component: UnorderedList,
  argTypes: {
    children: {
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    children: [
      <UnorderedListItem key={1}>Dit is het eerste niveau opsommingsteken.</UnorderedListItem>,
      <UnorderedListItem key={2}>
        Dit is het eerste niveau opsommingsteken.
        <UnorderedList>
          <UnorderedListItem key={1.1}>Dit is het tweede niveau opsommingsteken.</UnorderedListItem>
          <UnorderedListItem key={1.2}>Dit is het tweede niveau opsommingsteken.</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>,
      <UnorderedListItem key={3}>Dit is het eerste niveau opsommingsteken.</UnorderedListItem>,
    ],
  },
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {},
}
