/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { TabsPage } from './TabsPage'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Tabs Page',
  component: TabsPage,
} satisfies Meta<typeof TabsPage>

export default meta

export const Default: StoryObj = {}
