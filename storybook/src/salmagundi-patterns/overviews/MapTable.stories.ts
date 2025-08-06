import type { Meta, StoryObj } from '@storybook/react-vite'
import { MapTableView } from './MapTableView'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Overviews/Map Table',
  component: MapTableView,
} satisfies Meta<typeof MapTableView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
