/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react'
import { Login, Menu } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Page menu',
  component: PageMenu,
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PageMenu>
      <PageMenu.Link href="#">English</PageMenu.Link>
      <PageMenu.Link href="#" icon={Login}>
        Inloggen Mijn Amsterdam
      </PageMenu.Link>
      <PageMenu.Button icon={Menu}>Alle onderwerpen</PageMenu.Button>
    </PageMenu>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}
