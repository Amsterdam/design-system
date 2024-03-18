/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar, Header, PageMenu } from '@amsterdam/design-system-react'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  args: {
    label: 'DS',
    imageSrc: '',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'dark-blue', 'dark-green', 'green', 'magenta', 'orange', 'purple', 'red', 'yellow'],
      selected: 'dark-blue',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPicture: Story = {
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128',
  },
}

export const FallbackIcon: Story = {
  args: {
    imageSrc: undefined,
    label: '',
  },
}

export const InAHeader: Story = {
  args: {
    label: 'DS',
  },
  render: (args) => (
    <Header
      links={
        <PageMenu>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <Avatar {...args} />
        </PageMenu>
      }
      title="Dashboard"
    />
  ),
}
