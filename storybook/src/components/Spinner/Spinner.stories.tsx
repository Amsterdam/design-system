/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/TODO-ADD-GROUP/Spinner',
  component: Spinner,
  args: {
    children: 'Nieuw component',
  },
  // Configure controls following documentation/storybook.md.
  argTypes: {
    children: childrenArgType('Any content for this component.'),
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
