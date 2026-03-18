/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineColorSample } from './InlineColorSample'

const meta = {
  title: 'Components/Docs/Inline Color Sample',
} satisfies Meta<typeof InlineColorSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      <InlineColorSample color="azure" />
      <InlineColorSample color="red" />
      <InlineColorSample color="green" />
      <InlineColorSample color="white" />
      <InlineColorSample color="black" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
