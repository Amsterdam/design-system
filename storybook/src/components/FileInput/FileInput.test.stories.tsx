/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileInput } from '@amsterdam/design-system-react/src'

import { disablePageLevelChecks } from '#storybook/_common/disablePageLevelChecks'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as fileInputMeta } from './FileInput.stories'

const meta = {
  ...fileInputMeta,
  title: 'Components/Forms/File Input',
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: disablePageLevelChecks('label'),
  // `multiple` belongs on the prop axis: only `disabled` and `hovered` are states the matrix applies.
  render: (args, context) => renderComponentVariants(FileInput, { args, variants: ['disabled'] }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
