/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { Icon, LinkList } from '@amsterdam/design-system-react'
import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleLinkList } from '../shared/exampleContent'

const linkList = exampleLinkList().map((text, index) => (
  <li key={index}>
    <a href="#">
      <Icon svg={ChevronRightIcon} color="link" size="level-5" />
      {text}
    </a>
  </li>
))

const meta = {
  title: 'Navigation/Link List',
  component: LinkList,
  args: {
    children: linkList,
    size: undefined,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    size: {
      control: {
        type: 'select',
        labels: { undefined: 'default', small: 'small' },
      },
      options: [undefined, 'small'],
    },
  },
} satisfies Meta<typeof LinkList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
