/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { AspectRatioSample } from './AspectRatioSample'

const meta = {
  title: 'Components/Docs/Aspect Ratio Sample',
} satisfies Meta<typeof AspectRatioSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <AspectRatioSample value="16 / 9" />
      <AspectRatioSample value="1 / 1" />
      <AspectRatioSample value="9 / 16" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
