/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Textbox } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/textbox/textbox.scss'

// TODO: Since we proxy the Utrecht CSS and we haven't decided on how we treat
// the CSS module. For now just rendering the React component.
const meta = {
  title: 'Textbox',
  component: Textbox,
  args: {
    placeholder: 'This is a text field',
    type: 'text',
    invalid: false,
    disabled: false,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textbox>

export default meta
type Story = StoryObj<typeof meta>

export const TextboxDummy: Story = {
  name: 'Textbox',
}
