/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { VisuallyHidden } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/visually-hidden/visually-hidden.scss'

const meta = {
  title: 'Visually hidden',
  component: VisuallyHidden,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Dit is alleen zichtbaar voor schermlezers',
  },
  decorators: [
    (Story) => (
      <div>
        Dit gedeelte is zichtbaar voor alle gebruikers, het gedeelte na deze zin alleen voor schermlezers.
        <Story />
      </div>
    ),
  ],
}
