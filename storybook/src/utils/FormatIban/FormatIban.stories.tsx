/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { formatIban, Paragraph } from '@amsterdam/design-system-react'

const meta = {
  title: 'Utilities/JavaScript/Format IBAN',
  args: {
    iban: 'NL21TRIO0123456789',
  },
  argTypes: {
    iban: {
      control: { type: 'text' },
      description: 'A Dutch IBAN bank account number.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Formats a Dutch IBAN bank account number in groups according to the Amsterdam writing guidelines.',
      },
    },
  },
  render: ({ iban }: { iban: string }) => <Paragraph>{formatIban(iban)}</Paragraph>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
