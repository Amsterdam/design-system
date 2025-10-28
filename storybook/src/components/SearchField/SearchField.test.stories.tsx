/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SearchField } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect, fn } from 'storybook/test'

import { default as searchFieldMeta } from './SearchField.stories'

const meta = {
  ...searchFieldMeta,
  title: 'Components/Forms/Search Field',
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

const testFunction = fn()

export const Test: Story = {
  args: {
    onSubmit: (event) => {
      event.preventDefault()
      const form = event.target as HTMLFormElement
      const searchInput = form.querySelector('input[type="search"]') as HTMLInputElement
      const searchValue = searchInput?.value
      testFunction(searchValue)
    },
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByRole('searchbox'), 'Amsterdam')
    await userEvent.click(canvas.getByRole('button'))
    expect(testFunction).toHaveBeenCalledWith('Amsterdam')
  },
  tags: ['!dev', '!autodocs'],
}
