import type { Meta, StoryObj } from '@storybook/react'

import { MapPage } from './MapPage'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Details/Map',
  component: MapPage,
  args: {
    activetab: 0,
  },
} satisfies Meta<typeof MapPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
