/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DesignTokensTable } from './DesignTokensTable'

const meta = {
  title: 'Components/Docs/Design Tokens Table',
} satisfies Meta<typeof DesignTokensTable>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => <DesignTokensTable tokens={{ name: { $value: 'value' } }} />,
  tags: ['!dev', '!autodocs'],
}
