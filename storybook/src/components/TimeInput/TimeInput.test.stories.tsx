/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimeInput } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as timeInputMeta } from './TimeInput.stories'

const meta = {
  ...timeInputMeta,
  title: 'Components/Forms/Time Input',
} satisfies Meta<typeof TimeInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(TimeInput, { args, variants: ['disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
