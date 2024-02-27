/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph, Tabs } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { exampleParagraph } from '../shared/exampleContent'

const SlowPanel = ({ children }: PropsWithChildren) => {
  console.log('[ARTIFICIALLY SLOW] Adding a 1000ms delay')

  let startTime = performance.now()
  while (performance.now() - startTime < 1000) {
    // Do nothing for 1000 ms to emulate extremely slow code
  }

  return children
}

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
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
    children: (
      <>
        <Tabs.List>
          <Tabs.Button tab={0} label="Gegevens" />
          <Tabs.Button tab={1} label="Aanslagen" />
          <Tabs.Button tab={2} label="Documenten" />
          <Tabs.Button tab={3} label="Acties" />
        </Tabs.List>
        <Tabs.Panel tab={0}>
          <div style={{ paddingTop: '2rem' }}>
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
          <SlowPanel>
            <div style={{ paddingTop: '2rem' }}>
              <Heading level={3}>Documenten</Heading>
              <Paragraph>(This tab panel simulates a load time of 1000 milliseconds.)</Paragraph>
            </div>
          </SlowPanel>
        </Tabs.Panel>
        <Tabs.Panel tab={3}>
          <div style={{ paddingTop: '2rem' }}>
            <Heading level={3}>Acties</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </div>
        </Tabs.Panel>
      </>
    ),
  },
}

const TabStoryTemplate: TabStory = {
  args: {
    label: 'Gegevens',
    tab: 0,
    disabled: false,
  },
  render: ({ ...args }) => <Tabs.Button {...args} />,
}

export const Default: Story = {
  ...StoryTemplate,
}

export const Tab: TabStory = {
  ...TabStoryTemplate,
}
