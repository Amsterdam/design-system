/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { Contact } from './Contact'
import { commonMeta } from '../common/meta'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Contact',
  component: Contact,
} satisfies Meta<typeof Contact>

export default meta

export const Default: StoryObj = {}
