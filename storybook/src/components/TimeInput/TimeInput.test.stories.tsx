/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimeInput } from '@amsterdam/design-system-react/src'

import { disablePageLevelChecks } from '#storybook/_common/disablePageLevelChecks'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as timeInputMeta } from './TimeInput.stories'

const meta = {
  ...timeInputMeta,
  title: 'Components/Forms/Time Input',
} satisfies Meta<typeof TimeInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: disablePageLevelChecks('label'),
  render: (args, context) => renderComponentVariants(TimeInput, { args, variants: ['disabled', 'hovered'] }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
