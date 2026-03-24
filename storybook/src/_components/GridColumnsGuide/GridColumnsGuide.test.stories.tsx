/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { GridColumnsGuide } from './GridColumnsGuide'

const meta = {
  title: 'Components/Docs/Grid Columns Guide',
} satisfies Meta<typeof GridColumnsGuide>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => <GridColumnsGuide />,
  tags: ['!dev', '!autodocs'],
}
