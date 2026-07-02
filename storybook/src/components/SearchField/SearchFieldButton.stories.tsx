/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchField } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Search Field',
  component: SearchField.Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'The accessible name of the button.',
      table: { disable: false },
    },
  },
  decorators: [
    (Story) => (
      <SearchField>
        <SearchField.Input />
        <Story />
      </SearchField>
    ),
  ],
  render: ({ children, ...args }) => <SearchField.Button {...args}>{children}</SearchField.Button>,
} satisfies Meta<typeof SearchField.Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  args: {
    children: 'Zoeken',
  },
}
