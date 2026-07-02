/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PieChartFillIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Menu } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu.Link,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
    icon: {
      control: { type: 'select' },
      mapping: Icons,
      options: Object.keys(Icons),
    },
  },
  decorators: [
    (Story) => (
      <Menu inWideWindow>
        <Story />
      </Menu>
    ),
  ],
  parameters: {
    themes: {
      themeOverride: 'Compact',
    },
  },
  render: ({ children, ...args }) => <Menu.Link {...args}>{children}</Menu.Link>,
} satisfies Meta<typeof Menu.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    children: 'Dashboard',
    href: '#',
    icon: <PieChartFillIcon />,
  },
}
