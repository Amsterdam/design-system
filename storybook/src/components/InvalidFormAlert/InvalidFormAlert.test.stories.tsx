/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { InvalidFormAlert } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as invalidFormAlertMeta } from './InvalidFormAlert.stories'

const meta = {
  ...invalidFormAlertMeta,
  title: 'Components/Forms/Invalid Form Alert',
} satisfies Meta<typeof InvalidFormAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: InvalidFormAlert, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
