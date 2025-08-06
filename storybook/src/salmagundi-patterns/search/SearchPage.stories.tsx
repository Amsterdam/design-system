/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'
import { SearchPage } from './SearchPage'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Search/Results',
  component: SearchPage,
} satisfies Meta<typeof SearchPage>

export default meta

export const Default: StoryObj = {}
