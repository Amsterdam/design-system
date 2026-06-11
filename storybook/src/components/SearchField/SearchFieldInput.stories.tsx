/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchField } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Search Field',
  component: SearchField.Input,
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <SearchField>
        <Story />
        <SearchField.Button />
      </SearchField>
    ),
  ],
  render: ({ ...args }) => <SearchField.Input {...args} />,
} satisfies Meta<typeof SearchField.Input>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    label: 'Zoeken',
  },
}
