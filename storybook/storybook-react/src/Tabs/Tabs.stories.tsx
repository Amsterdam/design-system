/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Tabs } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
// import { exampleParagraph } from '../shared/exampleContent'

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
  component: Tabs.Link,
  args: {
    label: 'Gegevens',
    href: '#',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'boolean' },
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
} satisfies Meta<typeof Tabs.Link>

type Story = StoryObj<typeof meta>
type TabStory = StoryObj<typeof tabMeta>

const StoryTemplate: Story = {
  args: {
    // children: [
    //   <>
    //     <Tabs.List>
    //       <Tabs.Link label="Gegevens" href="#" />
    //       <Tabs.Link label="Aanslagen" href="#" />
    //       <Tabs.Link label="Documenten" href="#" />
    //       <Tabs.Link label="Acties" href="#" isDisabled />
    //     </Tabs.List>
    //     <Tabs.Panel>
    //       <Heading level={3}>Gegevens</Heading>
    //       <Paragraph>{exampleParagraph()}</Paragraph>
    //     </Tabs.Panel>
    //     <Tabs.Panel>
    //       <Heading level={3}>Aanslagen</Heading>
    //       <Paragraph>{exampleParagraph()}</Paragraph>
    //     </Tabs.Panel>
    //     <Tabs.Panel>
    //       <Heading level={3}>Documenten</Heading>
    //       <Paragraph>{exampleParagraph()}</Paragraph>
    //     </Tabs.Panel>
    //     <Tabs.Panel>
    //       <Heading level={3}>Acties</Heading>
    //       <Paragraph>{exampleParagraph()}</Paragraph>
    //     </Tabs.Panel>
    //   </>,
    // ],
  },
}

const TabStoryTemplate: TabStory = {
  args: {
    label: 'Gegevens',
    href: '#',
  },
  render: ({ ...args }) => <Tabs.Link {...args} />,
}

export const Default: Story = {
  ...StoryTemplate,
}

export const Tab: TabStory = {
  ...TabStoryTemplate,
}
