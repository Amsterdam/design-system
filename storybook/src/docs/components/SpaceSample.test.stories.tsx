/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpaceSample } from './SpaceSample'

const meta = {
  title: 'Components/Storybook/Spacing Sample',
} satisfies Meta<typeof SpaceSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => <SpaceSample spacing="1em" />,
}
