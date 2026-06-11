/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { HouseIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { LinkList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Link List',
  component: LinkList.Link,
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
    size: {
      control: {
        labels: { undefined: 'medium' },
        type: 'radio',
      },
      options: ['small', undefined, 'large'],
    },
  },
  decorators: [
    (Story) => (
      <LinkList>
        <Story />
      </LinkList>
    ),
  ],
  render: ({ children, ...args }) => <LinkList.Link {...args}>{children}</LinkList.Link>,
} satisfies Meta<typeof LinkList.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    children: 'Adressen en openingstijden',
    href: '#',
    icon: <HouseIcon />,
  },
}

export const ContrastColour: Story = {
  args: {
    ...Link.args,
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    ...Link.args,
    color: 'inverse',
  },
}
