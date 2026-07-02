/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb.Link,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
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
