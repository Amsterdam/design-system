/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { VisuallyHidden } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/visually-hidden/visually-hidden.scss'

const meta = {
  title: 'Containers/Visually Hidden',
  component: VisuallyHidden,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Dit is te lezen door een schermlezer',
  },
  decorators: [
    (Story) => (
      <div>
        Dit gedeelte is beschikbaar voor alle gebruikers, het gedeelte na deze zin alleen voor niet-visuele user agents.
        <Story />
      </div>
    ),
  ],
}
