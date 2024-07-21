/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Screen',
  component: Screen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Screen>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <div className="ams-docs-child">Ik pas in het scherm.</div> },
}

export const ExtraWide: Story = {
  args: {
    children: <div className="ams-docs-child">Ik pas in een extra breed scherm.</div>,
    maxWidth: 'x-wide',
  },
}
