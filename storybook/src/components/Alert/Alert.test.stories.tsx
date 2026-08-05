/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as alertMeta } from './Alert.stories'

const meta = {
  ...alertMeta,
  title: 'Components/Feedback/Alert',
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: {
    // The matrix shows heading levels side by side, not as a document outline.
    a11y: { config: { rules: [{ enabled: false, id: 'heading-order' }] } },
  },
  render: (args, context) => renderComponentVariants(Alert, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
