/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph, VisuallyHidden } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Visually Hidden',
  component: VisuallyHidden,
  decorators: [
    (Story) => (
      <div>
        <Paragraph>
          This text is available to all users. The text below this sentence is only available for non-visual user
          agents.
        </Paragraph>
        <Paragraph>
          <Story />
        </Paragraph>
      </div>
    ),
  ],
  args: {
    children: 'This text can be read out by a screen reader.',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
