/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShadowSample } from './ShadowSample'

const meta = {
  title: 'Components/Docs/Shadow Sample',
} satisfies Meta<typeof ShadowSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-gallery">
      <ShadowSample value="0 0 0 0.125rem hotpink" />
      <ShadowSample value="inset 0 -0.125rem 0 0 rebeccapurple" />
      <ShadowSample value="4px 4px 8px 0 rgba(0,0,0,0.25)" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
