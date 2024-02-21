/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Components/Layout/Screen',
  component: Screen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Screen>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Ik pas in het scherm.</p> },
}

export const ExtraWide: Story = {
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Ik pas in een extra breed scherm.</p>,
    maxWidth: 'x-wide',
  },
}
