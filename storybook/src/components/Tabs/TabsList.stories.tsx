/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs.List,
  decorators: [
    (Story) => (
      <Tabs>
        <Story />
        <Tabs.Panel id="west">
          <Paragraph>Bos en Lommerplein 250, 1055 EK Amsterdam</Paragraph>
        </Tabs.Panel>
        <Tabs.Panel id="oost">
          <Paragraph>Oranje-Vrijstaatplein 2, 1093 NG Amsterdam</Paragraph>
        </Tabs.Panel>
      </Tabs>
    ),
  ],
} satisfies Meta<typeof Tabs.List>

export default meta

type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    children: [
      <Tabs.Button aria-controls="west" key="west">
        West
      </Tabs.Button>,
      <Tabs.Button aria-controls="oost" key="oost">
        Oost
      </Tabs.Button>,
    ],
  },
}
