/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { Home } from './Home'
import { commonMeta } from '../common/meta'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Home Page',
  component: Home,
} satisfies Meta<typeof Home>

export default meta

export const Default: StoryObj = {}
