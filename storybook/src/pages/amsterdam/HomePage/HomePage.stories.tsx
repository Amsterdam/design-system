/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { HomePage } from './HomePage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Home Page',
  component: HomePage,
} satisfies Meta<typeof HomePage>

export default meta

export const Default: StoryObj = {}
