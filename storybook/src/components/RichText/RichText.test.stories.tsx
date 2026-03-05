/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { RichText } from '@amsterdam/design-system-react/src'
// import { userEvent, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as richTextMeta } from './RichText.stories'

const meta = {
  ...richTextMeta,
  title: 'Components/Forms/Rich Text',
} satisfies Meta<typeof RichText>

export default meta

type Story = StoryObj<typeof meta>

export const Typing: Story = {
  // play: async ({ canvasElement }) => {
  //     const canvas = within(canvasElement)
  //     const textbox = await canvas.findByRole('textbox')
  //     await userEvent.type(textbox, 'Hallo wereld', { delay: 10 })
  // },
}
