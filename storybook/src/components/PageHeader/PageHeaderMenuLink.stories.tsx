/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons'
import { PageHeader } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Page Header',
  component: PageHeader.MenuLink,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
  },
  decorators: [(Story) => <PageHeader menuItems={<Story />} />],
  render: ({ children, ...args }) => <PageHeader.MenuLink {...args}>{children}</PageHeader.MenuLink>,
} satisfies Meta<typeof PageHeader.MenuLink>

export default meta

type Story = StoryObj<typeof meta>

export const MenuLink: Story = {
  args: {
    children: 'Zoeken',
    href: '#',
  },
}
