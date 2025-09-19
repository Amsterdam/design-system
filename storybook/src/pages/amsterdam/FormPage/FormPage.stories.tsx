/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { FormPage } from './FormPage'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Form Page',
  component: FormPage,
} satisfies Meta<typeof FormPage>

export default meta

export const Default: StoryObj = {}
