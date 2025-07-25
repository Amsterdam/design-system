/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, StandaloneLink } from '@aram-limpens/design-system-react'
import { ActionGroup } from '@aram-limpens/design-system-react/src'
import { DownloadIcon } from '@aram-limpens/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Action Group',
  component: ActionGroup,
  args: {
    children: [<Button>Doorgaan</Button>, <Button variant="secondary">Stoppen</Button>],
  },
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Stacked: Story = {
  args: {
    children: [<Button>Adres wijzigen</Button>, <Button variant="secondary">Adres verwijderen</Button>],
    className: 'ams-resize-horizontal',
    style: {
      inlineSize: '16rem',
    },
  },
}

export const WithLink: Story = {
  args: {
    children: [
      <Button key={1}>Bewerken</Button>,
      <StandaloneLink download href="#" icon={DownloadIcon} key={2}>
        Downloaden
      </StandaloneLink>,
    ],
  },
}
