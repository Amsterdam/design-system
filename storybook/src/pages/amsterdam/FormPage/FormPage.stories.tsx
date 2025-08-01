/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'
import { FormPage } from './FormPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Form Page',
  component: FormPage,
} satisfies Meta<typeof FormPage>

export default meta

export const Default: StoryObj = {}
