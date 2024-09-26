/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ActionGroup } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Action Group',
  component: ActionGroup,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
