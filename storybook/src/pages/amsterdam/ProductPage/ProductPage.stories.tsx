/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'
import { ProductPage } from './ProductPage'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Product Page',
  component: ProductPage,
} satisfies Meta<typeof ProductPage>

export default meta

export const Default: StoryObj = {}
