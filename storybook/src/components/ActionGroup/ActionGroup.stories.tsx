/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, StandaloneLink } from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import { ActionGroup } from '@amsterdam/design-system-react/src'
import { actionGroupGapSizes } from '@amsterdam/design-system-react/src/ActionGroup/ActionGroup'

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
  argTypes: {
    gap: {
      control: {
        labels: { undefined: 'medium (default)' },
        type: 'select',
      },
      options: [undefined, ...actionGroupGapSizes],
    },
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
    className: '_ams-resize-horizontal',
    style: {
      inlineSize: '16rem',
    },
  },
}

export const StackedWithSmallGap: Story = {
  args: {
    ...Stacked.args,
    gap: 'small',
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
