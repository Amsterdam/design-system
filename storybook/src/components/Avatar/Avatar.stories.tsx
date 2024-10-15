/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Header, PageMenu } from '@amsterdam/design-system-react'
import { Avatar } from '@amsterdam/design-system-react/src'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  args: {
    label: 'DS',
    imageSrc: '',
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
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
        <PageMenu alignEnd>
          <PageMenu.Item>
            <PageMenu.Link href="#">Contact</PageMenu.Link>
          </PageMenu.Item>
          <PageMenu.Item>
            <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
              Zoeken
            </PageMenu.Button>
          </PageMenu.Item>
          <PageMenu.Item>
            <Avatar {...args} />
          </PageMenu.Item>
        </PageMenu>
      }
    />
  ),
}
