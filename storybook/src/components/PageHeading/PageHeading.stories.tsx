/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageHeading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Text/Page Heading',
  component: PageHeading,
  args: {
    children: 'Gemeente Amsterdam',
  },
  argTypes: {
    children: {
      description: 'The heading text.',
      table: { disable: false },
    },
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
  },
} satisfies Meta<typeof PageHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
