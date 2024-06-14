/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph, Tabs } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren, ReactNode } from 'react'
import { exampleParagraph as exampleParagraphContent } from '../shared/exampleContent'

const slowPanelDelay = 1000

const SlowPanel = ({ children }: PropsWithChildren) => {
  console.log('[ARTIFICIALLY SLOW] Adding a 1000ms delay')

  let startTime = performance.now()
  while (performance.now() - startTime < slowPanelDelay) {
    /* Emulate slow code. */
  }

  return children
}

const exampleParagraph = <Paragraph>{exampleParagraphContent()}</Paragraph>

type TabContent = {
  label: string
  body: ReactNode
}

const tabContent: Array<TabContent> = [
  { label: 'Gegevens', body: exampleParagraph },
  { label: 'Aanslagen', body: exampleParagraph },
  {
    label: 'Documenten',
    body: (
      <>
        <Paragraph>(This tab panel simulates a load time of {slowPanelDelay} milliseconds.)</Paragraph>
        <SlowPanel />
      </>
    ),
  },
  { label: 'Acties', body: exampleParagraph },
]

const defaultTabs = [
  <Tabs.List key="tabsList">
    {tabContent.map((content, index) => (
      <Tabs.Button key={content.label} tab={index}>
        {content.label}
      </Tabs.Button>
    ))}
  </Tabs.List>,
  ...(() =>
    tabContent.map((content, index) => (
      <Tabs.Panel tab={index} key={content.label}>
        <div style={{ paddingTop: '2rem' }}>
          <Heading level={3}>{content.label}</Heading>
          <Paragraph>{content.body}</Paragraph>
        </div>
      </Tabs.Panel>
    )))(),
]

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  argTypes: {
    children: defaultTabs,
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
