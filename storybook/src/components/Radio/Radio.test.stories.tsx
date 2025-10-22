/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as radioMeta } from './Radio.stories'

const meta = {
  ...radioMeta,
  title: 'Components/Forms/Radio',
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Radio, args }),
  tags: ['!dev', '!autodocs'],
}
