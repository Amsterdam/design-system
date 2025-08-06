import type { Meta, StoryObj } from '@storybook/react'

import { TableView } from './TableView'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Overviews/Table',
  component: TableView,
} satisfies Meta<typeof TableView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
