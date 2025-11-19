/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CharacterCount } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as characterCountMeta } from './CharacterCount.stories'

const meta = {
  ...characterCountMeta,
  title: 'Components/Forms/Character Count',
} satisfies Meta<typeof CharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(CharacterCount, { args }),
  tags: ['!dev', '!autodocs'],
}
