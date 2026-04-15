/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { BundleTest } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as bundleTestMeta } from './BundleTest.stories'

const meta = {
  ...bundleTestMeta,
  title: 'Bundle-Test',
} satisfies Meta<typeof BundleTest>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(BundleTest, { args }),
  tags: ['!dev', '!autodocs'],
}
