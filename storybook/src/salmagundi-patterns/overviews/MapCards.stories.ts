import type { Meta, StoryObj } from '@storybook/react-vite'
import { MapCardsView } from './MapCardsView'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Overviews/Map Cards',
  component: MapCardsView,
} satisfies Meta<typeof MapCardsView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
