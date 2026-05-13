/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  argTypes: {
    onTabChange: {
      action: 'clicked',
      description: 'Provides the id of the activated tab.',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

const maxInlineSizeDecorator: Decorator = (Story) => (
  <div style={{ maxInlineSize: '20rem' }}>
    <Story />
  </div>
)

export const Default: Story = {
  args: {
    children: [
      <Tabs.List key="list">
        <Tabs.Button aria-controls="west">West</Tabs.Button>
        <Tabs.Button aria-controls="centrum">Centrum</Tabs.Button>
        <Tabs.Button aria-controls="oost">Oost</Tabs.Button>
      </Tabs.List>,
      <Tabs.Panel id="west" key="west">
        <Paragraph>
          Bos en Lommerplein 250
          <br />
          1055 EK Amsterdam
        </Paragraph>
      </Tabs.Panel>,
      <Tabs.Panel id="centrum" key="centrum">
        <Paragraph>
          Amstel 1
          <br />
          1011 PN Amsterdam
        </Paragraph>
      </Tabs.Panel>,
      <Tabs.Panel id="oost" key="oost">
        <Paragraph>
          Oranje-Vrijstaatplein 2<br />
          1093 NG Amsterdam
        </Paragraph>
      </Tabs.Panel>,
    ],
  },
  decorators: [maxInlineSizeDecorator],
}
