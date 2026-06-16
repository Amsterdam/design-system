/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileInput } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as fileInputMeta } from './FileInput.stories'

const meta = {
  ...fileInputMeta,
  title: 'Components/Forms/File Input',
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(FileInput, { args, variants: ['disabled', 'multiple'] }, context),
  tags: ['!dev', '!autodocs'],
}
