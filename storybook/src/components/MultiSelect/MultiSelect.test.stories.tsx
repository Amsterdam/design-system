/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MultiSelect } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as multiSelectMeta } from './MultiSelect.stories'

const meta = {
  ...multiSelectMeta,
  title: 'Multi-Select',
} satisfies Meta<typeof MultiSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(MultiSelect, { args }),
  tags: ['!dev', '!autodocs'],
}
