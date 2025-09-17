/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'

import { commonMeta } from '../common/config'
import { ProductPage } from './ProductPage'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Product Page',
  component: ProductPage,
} satisfies Meta<typeof ProductPage>

export default meta

export const Default: StoryObj = {}
