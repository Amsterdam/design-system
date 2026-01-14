/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { ProjectPage } from './ProjectPage'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Project Page',
  component: ProjectPage,
} satisfies Meta<typeof ProjectPage>

export default meta

export const Default: StoryObj = {}
