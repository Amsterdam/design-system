/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as logoMeta } from './Logo.stories'

const meta = {
  ...logoMeta,
  title: 'Components/Media/Logo',
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Logo, { args }),
  tags: ['!dev', '!autodocs'],
}
