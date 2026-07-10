/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from '@amsterdam/design-system-react/src'

import { childrenArgType, hrefArgType, linkComponentArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb.Link,
  argTypes: {
    children: childrenArgType('The link text.'),
    href: hrefArgType,
    linkComponent: linkComponentArgType,
  },
  decorators: [
    (Story) => (
      <Breadcrumb>
        <Story />
      </Breadcrumb>
    ),
  ],
} satisfies Meta<typeof Breadcrumb.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    children: 'Home',
    href: '#',
  },
}
