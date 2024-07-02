/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { TablePage } from './TablePage'
import { commonMeta } from '../common/meta'

const meta = {
  ...commonMeta,
  title: 'Pages/Amopis/Table Page',
  component: TablePage,
} satisfies Meta<typeof TablePage>

export default meta

export const Default: StoryObj = {}
