import type { Meta, StoryObj } from '@storybook/react'

import FormPage from './FormPage'
import { pageMeta } from '../common/config'

const meta = {
  ...pageMeta,
  title: 'OOV/Forms/FormPage',
  component: FormPage,
  args: {
    activetab: 0,
  },
} satisfies Meta<typeof FormPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
