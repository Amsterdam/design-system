/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageHeading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Text/Page Heading',
  component: PageHeading,
  args: {
    children: 'Gemeente Amsterdam',
    inverseColor: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
}
