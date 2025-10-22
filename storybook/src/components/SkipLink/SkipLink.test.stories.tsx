/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkipLink } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as skipLinkMeta } from './SkipLink.stories'

const meta = {
  ...skipLinkMeta,
  title: 'Components/Navigation/Skip Link',
} satisfies Meta<typeof SkipLink>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: SkipLink, args }),
  tags: ['!dev', '!autodocs'],
}
