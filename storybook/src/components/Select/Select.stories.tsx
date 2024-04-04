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
    invalid: false,
    required: false,
    disabled: false,
    multiple: false,
    children: [
      <Select.Option key="0" disabled selected hidden>
        Selecteer een stadsdeel
      </Select.Option>,
      <Select.Option key="1" value="1">
        Centrum
      </Select.Option>,
      <Select.Option key="2" value="2">
        Noord
      </Select.Option>,
      <Select.Option key="3" value="3">
        West
      </Select.Option>,
      <Select.Option key="4" value="4" disabled>
        Westpoort
      </Select.Option>,
      <Select.Option key="6" value="5">
        Nieuw-West
      </Select.Option>,
      <Select.Option key="7" value="6">
        Zuid
      </Select.Option>,
      <Select.Option key="8" value="7">
        Zuidoost
      </Select.Option>,
    ],
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
