/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as labelMeta } from './Label.stories'

const meta = {
  ...labelMeta,
  title: 'Components/Forms/Label',
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Label, { args }),
  tags: ['!dev', '!autodocs'],
}
