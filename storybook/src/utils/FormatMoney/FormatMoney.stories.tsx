/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Args, Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { formatMoney } from '@amsterdam/design-system-react'

const meta = {
  title: 'Utilities/JavaScript/Format Money',
  args: {
    cents: 25,
    euros: 1040,
  },
  argTypes: {
    cents: {
      control: { max: 99, min: 0, type: 'number' },
    },
    euros: {
      control: { type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Formats an amount of money in euros according to the City of Amsterdam writing guidelines.',
      },
    },
  },
  render: ({ cents, euros }: Args) => <Paragraph>{formatMoney(cents ? euros + cents / 100 : euros)}</Paragraph>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
