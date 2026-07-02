/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TabNavigation } from '@amsterdam/design-system-react/src'

import { childrenArgType, hrefArgType, linkComponentArgType } from '#storybook/_common/argTypes'
import { iconArgType } from '#storybook/_common/iconArgTypes'

const meta = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigation.Link,
  argTypes: {
    children: childrenArgType('The link text.'),
    href: hrefArgType,
    icon: iconArgType(),
    linkComponent: linkComponentArgType,
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
