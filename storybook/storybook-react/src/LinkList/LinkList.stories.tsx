/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { LinkList } from '@amsterdam/design-system-react'
import { ChattingIcon, HousingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
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

export const WithCustomIcons: Story = {
  args: {
    children: [
      <LinkList.Link key="form" href="#" icon={ChattingIcon}>
        Contactformulier
      </LinkList.Link>,
      <LinkList.Link key="address" href="#" icon={HousingIcon}>
        Adressen en openingstijden
      </LinkList.Link>,
      <LinkList.Link key="phone" href="#" icon={PhoneIcon}>
        Bel 14 020
      </LinkList.Link>,
    ],
  },
}
