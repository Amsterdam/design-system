/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { commonMeta } from '../common/meta'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Form',
  component: Form,
} satisfies Meta<typeof Form>

export default meta

export const Default: StoryObj = {}
