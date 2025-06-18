/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { SearchPage } from './SearchPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Application/Search',
  component: SearchPage,
} satisfies Meta<typeof SearchPage>

export default meta

export const Default: StoryObj = {}
