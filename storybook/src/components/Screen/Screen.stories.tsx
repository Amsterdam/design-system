/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Screen',
  component: Screen,
  args: {
    className: 'ams-docs-screen',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Screen>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <div className="ams-docs-item" /> },
}
