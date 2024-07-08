/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amopis/Details Page',
  component: DetailsPage,
} satisfies Meta<typeof DetailsPage>

export default meta

export const Default: StoryObj = {}
