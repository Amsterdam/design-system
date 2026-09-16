/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 10,
    text: '4 van de 10 stappen',
    value: 4,
  },
}
