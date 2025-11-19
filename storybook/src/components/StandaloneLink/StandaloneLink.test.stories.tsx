/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { StandaloneLink } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as standaloneLinkMeta } from './StandaloneLink.stories'

const meta = {
  ...standaloneLinkMeta,
  title: 'Components/StandaloneLink',
} satisfies Meta<typeof StandaloneLink>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(StandaloneLink, { args }),
  tags: ['!dev', '!autodocs'],
}
