import { Meta, StoryObj } from '@storybook/react-vite'
import { TrajectBadge } from './TrajectBadge'

const meta = {
  title: 'Components/TrajectBadge',
  component: TrajectBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof TrajectBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Traject 1',
  },
}

export const Active: Story = {
  args: {
    active: true,
    label: 'Traject 1',
  },
}
