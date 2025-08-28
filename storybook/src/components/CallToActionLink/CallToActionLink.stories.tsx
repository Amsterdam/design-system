/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CallToActionLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
    href: {
      description: 'The url for the link.',
      name: 'href',
      type: { name: 'string', required: false },
    },
  },
} satisfies Meta<typeof CallToActionLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
