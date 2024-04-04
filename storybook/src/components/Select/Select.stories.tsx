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
    children: [
      <option key="1" value="1">
        Centrum
      </option>,
      <option key="2" value="2">
        Noord
      </option>,
      <option key="3" value="3">
        West
      </option>,
      <option key="4" value="4">
        Nieuw-West
      </option>,
      <option key="5" value="5">
        Zuid
      </option>,
      <option key="6" value="6">
        Zuidoost
      </option>,
    ],
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
