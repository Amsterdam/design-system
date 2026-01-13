/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpacingSample } from './SpacingSample'

const meta = {
  title: 'Components/Storybook/Spacing Sample',
} satisfies Meta<typeof SpacingSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => <SpacingSample spacing="1em" />,
}
