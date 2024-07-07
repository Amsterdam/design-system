/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import type { HTMLAttributes } from 'react'

type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => <span className="ams-visually-hidden">{children}</span>

const meta = {
  title: 'Utilities/CSS/Visually Hidden',
  component: VisuallyHidden,
  args: {
    children: 'This text can be read out by a screen reader.',
  },
  argTypes: {
    children: {
      description: 'The content to hide visually.',
      table: { disable: false },
    },
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div>
        <p className="ams-paragraph">
          This text is available to all users. The text below this sentence is only available for non-visual user
          agents.
        </p>
        <p className="ams-paragraph">
          <Story />
        </p>
      </div>
    ),
  ],
}
