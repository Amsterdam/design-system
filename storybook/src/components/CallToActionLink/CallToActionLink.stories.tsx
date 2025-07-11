/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CallToActionLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Call-to-Action-Link',
  component: CallToActionLink,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof CallToActionLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
