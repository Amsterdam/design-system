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
    wrap: undefined,
  },
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <PageMenu.Item>
        <PageMenu.Link href="#" key={1}>
          Over deze site
        </PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item>
        <PageMenu.Link href="#" key={2}>
          Privacy
        </PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item>
        <PageMenu.Link href="#" key={3}>
          Cookies
        </PageMenu.Link>
      </PageMenu.Item>,
    ],
  },
}

export const Alignment: Story = {
  args: {
    alignEnd: true,
    children: [
      <PageMenu.Item>
        <PageMenu.Link href="#" key={1} lang="en">
          English
        </PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item>
        <PageMenu.Link href="#" key={2}>
          Contact
        </PageMenu.Link>
      </PageMenu.Item>,
      <PageMenu.Item>
        <PageMenu.Link href="#" key={3} icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
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
