/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorMessage } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as errorMessageMeta } from './ErrorMessage.stories'

const meta = {
  ...errorMessageMeta,
  title: 'Components/Forms/Error Message',
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(ErrorMessage, { args }),
  tags: ['!dev', '!autodocs'],
}
