/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { DetailPage } from './DetailPage'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  component: DetailPage,
} satisfies Meta<typeof DetailPage>

export default meta

export const Default: StoryObj = {}
