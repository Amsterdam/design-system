/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageHeading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { inverseColorDecorator } from '../shared/decorators'

const meta = {
  title: 'Components/Text/Page Heading',
  component: PageHeading,
  args: {
    children: 'Gemeente Amsterdam',
    inverseColor: false,
  },
  argTypes: {
    children: {
      description: 'The heading text.',
      table: { disable: false },
    },
  },
  decorators: [inverseColorDecorator],
} satisfies Meta<typeof PageHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InverseColour: Story = {
  args: {
    inverseColor: true,
  },
}
