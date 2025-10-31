/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as alertMeta } from './Alert.stories'

const meta = {
  ...alertMeta,
  title: 'Components/Feedback/Alert',
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Alert, { args }),
  tags: ['!dev', '!autodocs'],
}
