/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Badge, Paragraph, Tip, UnorderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Tip',
  component: Tip,
  args: {
    children: [
      <Badge key="badge" color="dark-green">
        Tip
      </Badge>,
      <Paragraph key="paragraph">
        Geeft u uw verhuizing van tevoren door, dan wordt uw melding bewaard tot de verhuisdatum. Dan pas begint de
        termijn van 24 uur of 5 werkdagen.
      </Paragraph>,
    ],
  },
} satisfies Meta<typeof Tip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InAList: Story = {
  decorators: (story) => (
    <UnorderedList>
      <UnorderedList.Item>Binnen Amsterdam op werkdagen binnen 24 uur.</UnorderedList.Item>
      <UnorderedList.Item>
        Vanuit een andere gemeente ongeveer 5 werkdagen.
        {story()}
      </UnorderedList.Item>
    </UnorderedList>
  ),
}
