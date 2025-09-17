/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, StandaloneLink } from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import { ActionGroup } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Layout/Action Group',
  component: ActionGroup,
  args: {
    children: [
      <Button key={1}>Doorgaan</Button>,
      <Button key={2} variant="secondary">
        Stoppen
      </Button>,
    ],
  },
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Stacked: Story = {
  args: {
    children: [
      <Button key={1}>Adres wijzigen</Button>,
      <Button key={2} variant="secondary">
        Adres verwijderen
      </Button>,
    ],
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
      <StandaloneLink download href="#" icon={<DownloadIcon />} key={2}>
        Downloaden
      </StandaloneLink>,
    ],
  },
}
