/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons'
import { TabNavigation } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigation.Link,
  argTypes: {
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
  },
  decorators: [
    (Story) => (
      <TabNavigation>
        <TabNavigation.List>
          <Story />
        </TabNavigation.List>
      </TabNavigation>
    ),
  ],
  render: ({ children, ...args }) => <TabNavigation.Link {...args}>{children}</TabNavigation.Link>,
} satisfies Meta<typeof TabNavigation.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    'aria-current': 'page',
    children: 'Gegevens',
    href: '#',
  },
}
