/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren, ReactNode } from 'react'
import { exampleParagraph } from '../shared/exampleContent'

const slowPanelDelay = 1000

const SlowPanel = ({ children }: PropsWithChildren) => {
  console.log(`[ARTIFICIALLY SLOW] Adding a ${slowPanelDelay}ms delay…`)

  let startTime = performance.now()
  while (performance.now() - startTime < slowPanelDelay) {
    /* Emulate slow code. */
  }

  return children
}

type TabContent = {
  id: number
  label: string
  body: ReactNode
}

const tabsContent: Array<TabContent> = [
  { id: 0, label: 'Gegevens', body: exampleParagraph() },
  { id: 1, label: 'Aanslagen', body: exampleParagraph() },
  {
    id: 2,
    label: 'Documenten',
    body: (
      <>
        (This tab panel simulates a load time of {slowPanelDelay} milliseconds.)
        <SlowPanel />
      </>
    ),
  },
  { id: 3, label: 'Acties', body: exampleParagraph() },
]

const defaultTabs = [
  <Tabs.List key="tabsList">
    {tabsContent.map(({ id, label }) => (
      <Tabs.Button key={label} tab={id}>
        {label}
      </Tabs.Button>
    ))}
  </Tabs.List>,
  tabsContent.map(({ id, body, label }) => (
    <Tabs.Panel key={label} tab={id}>
      <Heading level={3}>{label}</Heading>
      <Paragraph>{body}</Paragraph>
    </Tabs.Panel>
  )),
]

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  args: {
    children: defaultTabs,
  },
  argTypes: {
    activeTab: {
      control: {
        type: 'number',
        min: 0,
        max: tabsContent.length - 1,
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInitialTab: Story = {
  args: {
    activeTab: 3,
  },
}
