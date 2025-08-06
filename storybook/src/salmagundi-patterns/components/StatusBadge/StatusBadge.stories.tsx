import { Meta, StoryObj } from '@storybook/react-vite'
import { StatusBadge } from './StatusBadge'

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Concept: Story = {
  args: {
    status: 0,
  },
}

export const Aanmelding: Story = {
  args: {
    status: 1,
  },
}

export const Afgerond: Story = {
  args: {
    status: 2,
  },
}

export const Verlopen: Story = {
  args: {
    status: 3,
  },
}
