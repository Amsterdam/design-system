/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as spinnerMeta } from './Spinner.stories'

const meta = {
  ...spinnerMeta,
  title: 'Components/Feedback/Spinner',
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(Spinner, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
