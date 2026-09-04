/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Metadata } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as metadataMeta } from './Metadata.stories'

const meta = {
  ...metadataMeta,
  title: 'Components/Text/Metadata',
} satisfies Meta<typeof Metadata>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(Metadata, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
