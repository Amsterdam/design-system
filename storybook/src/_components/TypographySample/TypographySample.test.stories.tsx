/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypographySample } from './TypographySample'

const meta = {
  title: 'Components/Docs/Typography Sample',
} satisfies Meta<typeof TypographySample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <TypographySample fontFamily="arial" />
      <TypographySample fontSize="1.5rem" />
      <TypographySample fontWeight="bold" />
      <TypographySample lineHeight="1.5" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
