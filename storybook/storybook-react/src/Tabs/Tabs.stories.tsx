/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Paragraph, Tabs } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { memo } from 'react'
import { exampleParagraph } from '../shared/exampleContent'

const SlowTab = memo(function SlowTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />')

  let items = []
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }
  return (
    <ul className="items" style={{ display: 'none' }}>
      {items}
    </ul>
  )
})

type SlowPostProps = {
  index: number
}

function SlowPost({ index }: SlowPostProps) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>
}

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

const tabMeta = {
  component: Tabs.Button,
  args: {
    label: 'Gegevens',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    key: {
      control: { type: 'number', min: 0, max: 9 },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
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

const StoryTemplate: Story = {
  args: {
    children: [
      <>
        <Tabs.List>
          <Tabs.Button tab={0} label="Gegevens" />
          <Tabs.Button tab={1} label="Aanslagen" />
          <Tabs.Button tab={2} label="Documenten" />
          <Tabs.Button tab={3} label="Acties" />
        </Tabs.List>
        <Tabs.Panel tab={0}>
          <div>
            <Heading level={3}>Gegevens</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </div>
        </Tabs.Panel>
        <Tabs.Panel tab={1}>
          <div style={{ paddingTop: '2rem' }}>
            <Heading level={3}>Aanslagen</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </div>
        </Tabs.Panel>
        <Tabs.Panel tab={2}>
          <div style={{ paddingTop: '2rem' }}>
            <Heading level={3}>Documenten</Heading>
            <Paragraph>Simulate a tab that takes 500ms to load.</Paragraph>
            <SlowTab />
          </div>
        </Tabs.Panel>
        <Tabs.Panel tab={3}>
          <div style={{ paddingTop: '2rem' }}>
            <Heading level={3}>Acties</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </div>
        </Tabs.Panel>
      </>,
    ],
  },
}

const TabStoryTemplate: TabStory = {
  args: {
    label: 'Gegevens',
    tab: 1,
    isDisabled: false,
  },
  render: ({ ...args }) => <Tabs.Button {...args} />,
}

export const Default: Story = {
  ...StoryTemplate,
}

export const Tab: TabStory = {
  ...TabStoryTemplate,
}
