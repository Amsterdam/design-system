/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs.Button,
  argTypes: {
    children: childrenArgType('The text for the tab.'),
  },
  decorators: [
    (Story) => (
      <Tabs>
        <Tabs.List>
          <Story />
        </Tabs.List>
        <Tabs.Panel id="panel-1">
          <Paragraph>Bos en Lommerplein 250, 1055 EK Amsterdam</Paragraph>
        </Tabs.Panel>
      </Tabs>
    ),
  ],
  render: ({ children, ...args }) => <Tabs.Button {...args}>{children}</Tabs.Button>,
} satisfies Meta<typeof Tabs.Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  args: {
    'aria-controls': 'panel-1',
    children: 'West',
  },
}
