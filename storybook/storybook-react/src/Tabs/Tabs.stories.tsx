/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Paragraph, Tabs } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const SlowItem = ({ id }: { id: number }) => {
  const startTime = performance.now()
  while (performance.now() - startTime < 10) {
    // Do nothing for 5 ms per item to emulate extremely slow code
  }

  return <li className="item">Slow Item #{id + 1}</li>
}

const ItemsList = () => {
  const items = [...(Array(100).keys() as any)]

  return (
    <ul className="items">
      {items.map((id) => (
        <SlowItem key={id} id={id} />
      ))}
    </ul>
  )
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
          <Tabs.Button tab={3} label="Acties" isDisabled />
        </Tabs.List>
        <Tabs.Panel tab={0}>
          <Heading level={3}>Gegevens</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Tabs.Panel>
        <Tabs.Panel tab={1}>
          <Heading level={3}>Aanslagen</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Tabs.Panel>
        <Tabs.Panel tab={2}>
          <Heading level={3}>Documenten</Heading>
          <Paragraph>
            <ItemsList />
          </Paragraph>
        </Tabs.Panel>
        <Tabs.Panel tab={3}>
          <Heading level={3}>Acties</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
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
