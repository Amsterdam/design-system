/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { NewsIndexPage } from './NewsIndexPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/News Index Page',
  component: NewsIndexPage,
} satisfies Meta<typeof NewsIndexPage>

export default meta

export const Default: StoryObj = {}
