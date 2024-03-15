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

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
}

export const WithImageSrc: Story = {
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/200',
  },
}

export const InAHeader: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <Header
        style={{ width: '100%' }}
        title="Dashboard"
        links={
          <PageMenu>
            <PageMenu.Link href="#">Contact</PageMenu.Link>
            <PageMenu.Link href="#" icon={SearchIcon}>
              Zoeken
            </PageMenu.Link>
            <Avatar label={'DS'} />
          </PageMenu>
        }
      ></Header>
    )
  },
}
