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
} satisfies Meta<typeof PageHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
