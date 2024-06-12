/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph, Tabs } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { exampleParagraph } from '../shared/exampleContent'

const slowPanelDelay = 1000

const SlowPanel = ({ children }: PropsWithChildren) => {
  console.log('[ARTIFICIALLY SLOW] Adding a 1000ms delay')

  let startTime = performance.now()
  while (performance.now() - startTime < slowPanelDelay) {
    /* Emulate slow code. */
  }

  return children
}

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  argTypes: {
    activeTab: {
      control: {
        type: 'number',
        min: 0,
        max: 3,
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

const tabMeta = {
  component: Tabs.Button,
  decorators: [
    (Story) => (
      <Tabs>
        <Story />
      </Tabs>
    ),
  ],
} satisfies Meta<typeof Tabs.Button>

type Story = StoryObj<typeof meta>
type TabStory = StoryObj<typeof tabMeta>

const defaultTabs = [
  <Tabs.List key={0}>
    <Tabs.Button tab={0}>Gegevens</Tabs.Button>
    <Tabs.Button tab={1}>Aanslagen</Tabs.Button>
    <Tabs.Button tab={2}>Documenten</Tabs.Button>
    <Tabs.Button tab={3}>Acties</Tabs.Button>
  </Tabs.List>,
  <Tabs.Panel tab={0} key={1}>
    <div style={{ paddingTop: '2rem' }}>
      <Heading level={3}>Gegevens</Heading>
      <Paragraph>{exampleParagraph()}</Paragraph>
    </div>
  </Tabs.Panel>,
  <Tabs.Panel tab={1} key={2}>
    <div style={{ paddingTop: '2rem' }}>
      <Heading level={3}>Aanslagen</Heading>
      <Paragraph>{exampleParagraph()}</Paragraph>
    </div>
  </Tabs.Panel>,
  <Tabs.Panel tab={2} key={3}>
    <div style={{ paddingTop: '2rem' }}>
      <Heading level={3}>Documenten</Heading>
      <Paragraph>(This tab panel simulates a load time of {slowPanelDelay} milliseconds.)</Paragraph>
      <SlowPanel />
    </div>
  </Tabs.Panel>,
  <Tabs.Panel tab={3} key={4}>
    <div style={{ paddingTop: '2rem' }}>
      <Heading level={3}>Acties</Heading>
      <Paragraph>{exampleParagraph()}</Paragraph>
    </div>
  </Tabs.Panel>,
]

export const Default: Story = {
  args: {
    children: defaultTabs,
  },
}

export const WithInitialTab: Story = {
  args: {
    activeTab: 3,
    children: defaultTabs,
  },
}

export const TabButton: TabStory = {
  args: {
    children: 'Gegevens',
    disabled: false,
    tab: 0,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    disabled: {
      table: { disable: true },
    },
    tab: {
      control: {
        type: 'number',
        min: 0,
        max: 3,
      },
    },
  },
  render: ({ children, ...args }) => <Tabs.Button {...args}>{children}</Tabs.Button>,
}
