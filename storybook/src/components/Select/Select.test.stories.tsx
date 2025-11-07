/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as selectMeta } from './Select.stories'

const meta = {
  ...selectMeta,
  title: 'Components/Forms/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants(Select, {
      args,
      variants: ['hovered', 'disabled'],
    }),
  tags: ['!dev', '!autodocs'],
}
