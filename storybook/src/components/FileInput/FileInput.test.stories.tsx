/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileInput } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as fileInputMeta } from './FileInput.stories'

const meta = {
  ...fileInputMeta,
  title: 'Components/Forms/File Input',
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: FileInput, args, variants: ['default', 'disabled', 'multiple'] }),
  tags: ['!dev', '!autodocs'],
}
