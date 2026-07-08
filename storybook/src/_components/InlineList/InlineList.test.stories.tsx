/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineList } from './InlineList'

const meta = {
  title: 'Components/Docs/Inline List',
} satisfies Meta<typeof InlineList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <InlineList>
      <InlineList.Item>
        <strong>64</strong> components
      </InlineList.Item>
      <InlineList.Item>
        <strong>220+</strong> icons
      </InlineList.Item>
      <InlineList.Item>
        <strong>1100+</strong> design tokens
      </InlineList.Item>
    </InlineList>
  ),
  tags: ['!dev', '!autodocs'],
}
