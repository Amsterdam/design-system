/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Select',
  component: Select.Option,
  decorators: [
    (Story) => (
      <Select>
        <Story />
      </Select>
    ),
  ],
} satisfies Meta<typeof Select.Option>

export default meta

type Story = StoryObj<typeof meta>

export const Option: Story = {
  args: {
    children: 'West',
    value: 'west',
  },
}
