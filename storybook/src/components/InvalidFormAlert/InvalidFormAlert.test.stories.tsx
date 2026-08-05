/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { InvalidFormAlert } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as invalidFormAlertMeta } from './InvalidFormAlert.stories'

const meta = {
  ...invalidFormAlertMeta,
  title: 'Components/Forms/Invalid Form Alert',
} satisfies Meta<typeof InvalidFormAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: {
    // The matrix shows heading levels side by side, not as a document outline.
    a11y: { config: { rules: [{ enabled: false, id: 'heading-order' }] } },
  },
  render: (args, context) => renderComponentVariants(InvalidFormAlert, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
