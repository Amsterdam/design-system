/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import * as TablePageStories from './stories'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

export const SortingWithSelect = TablePageStories.SortingWithSelect

export const WithPagination = TablePageStories.WithPagination
