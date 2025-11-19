/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CallToActionLink } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as callToActionLinkMeta } from './CallToActionLink.stories'

const meta = {
  ...callToActionLinkMeta,
  title: 'Components/Navigation/Call to Action Link',
} satisfies Meta<typeof CallToActionLink>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(CallToActionLink, { args }),
  tags: ['!dev', '!autodocs'],
}
