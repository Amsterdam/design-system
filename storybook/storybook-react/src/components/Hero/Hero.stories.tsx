/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Hero } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/hero/hero.scss'

const meta = {
  title: 'Hero',
  component: Hero,
} satisfies Meta<typeof Hero>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
