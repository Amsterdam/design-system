/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

export { SortingWithSelect } from './stories/SortingWithSelect'
export { WithPagination } from './stories/WithPagination'
