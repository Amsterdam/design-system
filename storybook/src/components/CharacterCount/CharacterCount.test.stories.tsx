/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CharacterCount } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

// Keeps visual regression coverage for the deprecated component until its removal on or after 2027-03-01.
const meta = {
  title: 'Components/Forms/Character Count',
  component: CharacterCount,
  args: {
    length: 7,
    maxLength: 10,
  },
} satisfies Meta<typeof CharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(CharacterCount, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
