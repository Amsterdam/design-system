/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react'
import { ActionGroup } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Buttons/Action Group',
  component: ActionGroup,
  args: {
    children: [<Button>Doorgaan</Button>, <Button variant="tertiary">Stoppen</Button>],
  },
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Stacked: Story = {
  args: {
    children: [<Button>Adres wijzigen</Button>, <Button variant="tertiary">Adres verwijderen</Button>],
    className: 'ams-resize-horizontal',
    style: {
      inlineSize: '16rem',
    },
  },
}
