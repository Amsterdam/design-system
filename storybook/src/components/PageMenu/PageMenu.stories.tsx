/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react/src'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Page Menu',
  component: PageMenu,
  args: {
    alignEnd: false,
  },
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <PageMenu.Item key={1}>
        <PageMenu.Link href="#">Over deze site</PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item key={2}>
        <PageMenu.Link href="#">Privacy</PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item key={3}>
        <PageMenu.Link href="#">Cookies</PageMenu.Link>
      </PageMenu.Item>,
    ],
  },
}

export const Alignment: Story = {
  args: {
    alignEnd: true,
    children: [
      <PageMenu.Item key={1}>
        <PageMenu.Link href="#" lang="en">
          English
        </PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item key={2}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item key={3}>
        <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
          Zoeken
        </PageMenu.Button>
      </PageMenu.Item>,
    ],
  },
}

export const Wrapping: Story = {
  args: {
    children: [
      'Onderzoeken',
      'Bezoeken',
      'Archiveren',
      'Nieuws',
      'Themasites',
      'Onderwijs',
      'Steun ons',
      'Organisatie',
      'Contact',
    ].map((label, index) => (
      <PageMenu.Item>
        <PageMenu.Link href="#" key={index}>
          {label}
        </PageMenu.Link>
      </PageMenu.Item>
    )),
  },
}
