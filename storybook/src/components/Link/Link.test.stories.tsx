/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Link } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as linkMeta } from './Link.stories'

const meta = {
  ...linkMeta,
  title: 'Components/Navigation/Link',
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Link, { args }),
  tags: ['!dev', '!autodocs'],
}
