/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { App } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/App',
  component: App,
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
