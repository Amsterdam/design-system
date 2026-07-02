/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from '@amsterdam/design-system-react/src'

import { childrenArgType, hrefArgType, iconArgType, linkComponentArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Containers/Page Header',
  component: PageHeader.MenuLink,
  argTypes: {
    children: childrenArgType('The link text.'),
    href: hrefArgType,
    icon: iconArgType,
    linkComponent: linkComponentArgType,
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
