/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { NewsPage } from './NewsPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/News Page',
  component: NewsPage,
} satisfies Meta<typeof NewsPage>

export default meta

export const Default: StoryObj = {}
