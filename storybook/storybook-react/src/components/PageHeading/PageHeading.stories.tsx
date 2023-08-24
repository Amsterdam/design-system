/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { PageHeading } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Page heading',
  component: PageHeading,
  args: {
    children: 'Gemeente Amsterdam',
    inverseColor: false,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof PageHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div
        style={{
          background: context.args.inverseColor ? '#004699' : 'transparent',
          margin: context.args.inverseColor ? -16 : 0,
          padding: context.args.inverseColor ? 16 : 0,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#004699',
          margin: -16,
          padding: 16,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
