/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Select',
  component: Select.Group,
  decorators: [
    (Story) => (
      <Select>
        <Story />
      </Select>
    ),
  ],
} satisfies Meta<typeof Select.Group>

export default meta

type Story = StoryObj<typeof meta>

export const Group: Story = {
  args: {
    children: [
      <Select.Option key="west" value="west">
        West
      </Select.Option>,
      <Select.Option key="oost" value="oost">
        Oost
      </Select.Option>,
      <Select.Option key="noord" value="noord">
        Noord
      </Select.Option>,
    ],
    label: 'Stadsdelen',
  },
}
