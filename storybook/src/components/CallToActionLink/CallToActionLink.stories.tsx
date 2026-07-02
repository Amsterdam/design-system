/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CallToActionLink } from '@amsterdam/design-system-react/src'

import { hrefArgType, linkComponentArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Navigation/Call to Action Link',
  component: CallToActionLink,
  args: {
    children: 'Rijbewijs aanvragen',
    href: '#',
  },
  argTypes: {
    children: {
      description: 'The link text.',
      table: { disable: false },
    },
    href: hrefArgType,
    linkComponent: linkComponentArgType,
  },
} satisfies Meta<typeof CallToActionLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
