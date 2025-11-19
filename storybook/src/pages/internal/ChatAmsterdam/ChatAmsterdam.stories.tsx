/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { ChatAmsterdam } from './ChatAmsterdam'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Chat Amsterdam',
  component: ChatAmsterdam,
} satisfies Meta<typeof ChatAmsterdam>

export default meta

export const Default: StoryObj = {}
