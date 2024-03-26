/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Select } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  args: {
    id: 'select',
    children: [
      <option key="1" value="1">
        Option 1
      </option>,
      <option key="2" value="2">
        Option 2
      </option>,
      <option key="3" value="3">
        Option 3
      </option>,
    ],
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
