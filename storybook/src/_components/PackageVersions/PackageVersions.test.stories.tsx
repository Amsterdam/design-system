/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PackageVersions } from './PackageVersions'

const meta = {
  title: 'Components/Docs/Package Versions',
} satisfies Meta<typeof PackageVersions>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => <PackageVersions />,
  tags: ['!dev', '!autodocs'],
}
