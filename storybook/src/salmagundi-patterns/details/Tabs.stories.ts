import type { Meta, StoryObj } from '@storybook/react-vite'
import { TabsPage } from './TabsPage'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Details/Tabs',
  component: TabsPage,
  args: {
    activetab: 'summary',
  },
} satisfies Meta<typeof TabsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Summary: Story = {}

export const Table: Story = {
  args: {
    activetab: 'table',
  },
}

export const Documents: Story = {
  args: {
    activetab: 'documents',
  },
}

export const Timeline: Story = {
  args: {
    activetab: 'timeline',
  },
}
