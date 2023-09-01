/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon, PageMenu } from '@amsterdam/design-system-react'
import { Login, Menu } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Page menu',
  component: PageMenu,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PageMenu>
      <PageMenu.Link href="#">English</PageMenu.Link>
      <PageMenu.Link href="#">
        Inloggen Mijn Amsterdam <Icon svg={Login} size="level-7" />
      </PageMenu.Link>
      <PageMenu.Button>
        Alle onderwerpen <Icon svg={Menu} size="level-7" />
      </PageMenu.Button>
    </PageMenu>
  ),
}
