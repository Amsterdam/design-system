/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { HouseIcon } from '@amsterdam/design-system-react-icons'
import { LinkList } from '@amsterdam/design-system-react/src'

import {
  contrastInverseColorArgType,
  hrefArgType,
  iconArgType,
  linkComponentArgType,
} from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Navigation/Link List',
  component: LinkList.Link,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
    color: contrastInverseColorArgType,
    href: hrefArgType,
    icon: {
      ...iconArgType,
      control: {
        labels: { undefined: 'ChevronForwardIcon (default)' },
        type: 'select',
      },
      options: iconArgType.options.filter((option) => option !== 'ChevronForwardIcon'),
    },
    linkComponent: linkComponentArgType,
    size: {
      control: {
        labels: { undefined: 'medium (default)' },
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
