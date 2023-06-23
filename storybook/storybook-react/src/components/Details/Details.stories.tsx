/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Details } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/details/details.scss'

const meta = {
  title: 'Details',
  component: Details,
  args: {
    summary: 'hallo',
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  },
} satisfies Meta<typeof Details>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'hallo',
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  },
}
