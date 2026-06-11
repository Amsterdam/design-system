/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs.Panel,
  decorators: [
    (Story) => (
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="panel-1">West</Tabs.Button>
        </Tabs.List>
        <Story />
      </Tabs>
    ),
  ],
  render: ({ children, ...args }) => <Tabs.Panel {...args}>{children}</Tabs.Panel>,
} satisfies Meta<typeof Tabs.Panel>

export default meta

type Story = StoryObj<typeof meta>

export const Panel: Story = {
  args: {
    children: <Paragraph>Bos en Lommerplein 250, 1055 EK Amsterdam</Paragraph>,
    id: 'panel-1',
  },
}
