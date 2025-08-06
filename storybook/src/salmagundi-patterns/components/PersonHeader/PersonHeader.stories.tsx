import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { PersonHeader } from './PersonHeader'

const meta = {
  title: 'Components/PersonHeader',
  component: PersonHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
