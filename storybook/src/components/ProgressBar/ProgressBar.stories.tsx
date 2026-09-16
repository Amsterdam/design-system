/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  args: {
    children: 'Nieuw component',
  },
  // Configure controls following documentation/storybook.md.
  argTypes: {
    children: childrenArgType('Any content for this component.'),
  },
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
