/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { BundleTest } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Bundle-Test',
  component: BundleTest,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof BundleTest>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
