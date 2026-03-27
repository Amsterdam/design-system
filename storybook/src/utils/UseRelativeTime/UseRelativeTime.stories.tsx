/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Args, Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { useRelativeTime } from '@amsterdam/design-system-react'

const RelativeTimeDemo = ({ minutesAgo }: { minutesAgo: number }) => {
  const timestamp = Date.now() - minutesAgo * 60_000
  const label = useRelativeTime(timestamp)

  return <Paragraph>{label}</Paragraph>
}

const meta = {
  title: 'Utilities/JavaScript/Use Relative Time',
  args: {
    minutesAgo: 5,
  },
  argTypes: {
    minutesAgo: {
      control: { min: 0, type: 'number' },
      description: 'Number of minutes in the past.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A React hook that returns a live-updating relative time string in Dutch.',
      },
    },
  },
  render: ({ minutesAgo }: Args) => <RelativeTimeDemo minutesAgo={minutesAgo} />,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
