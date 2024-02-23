/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Page Menu',
  component: PageMenu,
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PageMenu>
      <PageMenu.Link href="#">English</PageMenu.Link>
      <PageMenu.Link href="#" icon={LoginIcon}>
        Inloggen Mijn Amsterdam
      </PageMenu.Link>
    </PageMenu>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}

export const AlignEnd: Story = {
  args: {
    alignEnd: true,
  },
  render: (args) => (
    <PageMenu {...args}>
      <PageMenu.Link href="#" key="onderzoeken">
        Onderzoeken
      </PageMenu.Link>
      <PageMenu.Link href="#" key="bezoeken">
        Bezoeken
      </PageMenu.Link>
      <PageMenu.Link href="#" key="archiveren">
        Archiveren
      </PageMenu.Link>
      <PageMenu.Link href="#" key="nieuws">
        Nieuws
      </PageMenu.Link>
      <PageMenu.Link href="#" key="themasites">
        Themasites
      </PageMenu.Link>
      <PageMenu.Link href="#" key="onderwijs">
        Onderwijs
      </PageMenu.Link>
      <PageMenu.Link href="#" key="steun-ons">
        Steun ons
      </PageMenu.Link>
      <PageMenu.Link href="#" key="organisatie">
        Organisatie
      </PageMenu.Link>
      <PageMenu.Link href="#" key="contact">
        Contact
      </PageMenu.Link>
    </PageMenu>
  ),
}
