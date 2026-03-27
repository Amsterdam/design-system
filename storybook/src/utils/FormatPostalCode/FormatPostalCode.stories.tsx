/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { formatPostalCode } from '@amsterdam/design-system-react'

const meta = {
  title: 'Utilities/JavaScript/Format Postal Code',
  args: {
    postalCode: '1014ba',
  },
  argTypes: {
    postalCode: {
      control: { type: 'text' },
      description: 'A Dutch postal code in any common notation.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Formats a Dutch postal code as four digits, a space, and two uppercase letters.',
      },
    },
  },
  render: ({ postalCode }: { postalCode: string }) => <Paragraph>{formatPostalCode(postalCode)}</Paragraph>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
