/* @license CC0-1.0 */

import { Logo } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Logo',
  id: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
