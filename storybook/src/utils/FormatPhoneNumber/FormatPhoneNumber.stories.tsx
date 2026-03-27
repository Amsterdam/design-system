/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { formatPhoneNumber } from '@amsterdam/design-system-react'

const meta = {
  title: 'Utilities/JavaScript/Format Phone Number',
  args: {
    phoneNumber: '0202355911',
  },
  argTypes: {
    phoneNumber: {
      control: { type: 'text' },
      description: 'A phone number in any common notation.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Formats a Dutch phone number according to the City of Amsterdam writing guidelines.',
      },
    },
  },
  render: ({ phoneNumber }: { phoneNumber: string }) => <Paragraph>{formatPhoneNumber(phoneNumber)}</Paragraph>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
