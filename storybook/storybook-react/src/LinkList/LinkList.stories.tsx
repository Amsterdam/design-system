/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { LinkList } from '@amsterdam/design-system-react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { exampleLinkList } from '../shared/exampleContent'

const links = exampleLinkList()

const meta = {
  title: 'Navigation/Link List',
  component: LinkList,
  args: {
    children: 'Default children',
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

export const Default: Story = {
  render: function Render() {
    const [args] = useArgs()

    return (
      <LinkList {...args}>
        {links.map((text, index) => (
          <LinkList.Link key={index} href="#" size={args['size']}>
            {text}
          </LinkList.Link>
        ))}
      </LinkList>
    )
  },
}

export const OnDarkBackground: Story = {
  render: function Render() {
    const [args] = useArgs()

    return (
      <div style={{ background: '#004699', padding: '1rem' }}>
        <LinkList {...args}>
          {links.map((text, index) => (
            <LinkList.Link key={index} href="#" onBackground="dark" size={args['size']}>
              {text}
            </LinkList.Link>
          ))}
        </LinkList>
      </div>
    )
  },
}
