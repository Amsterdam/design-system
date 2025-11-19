/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchField } from '@amsterdam/design-system-react/src'
import { expect, fn } from 'storybook/test'

import { default as searchFieldMeta } from './SearchField.stories'

const meta = {
  ...searchFieldMeta,
  title: 'Components/Forms/Search Field',
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

const testFn = fn()

export const Test: Story = {
  args: {
    onSubmit: (event) => {
      event.preventDefault()
      const form = event.target as HTMLFormElement
      const searchInput = form.querySelector('input[type="search"]') as HTMLInputElement
      const searchValue = searchInput?.value
      testFn(searchValue)
    },
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByTestId('searchbox'), 'Amsterdam')
    await userEvent.click(canvas.getByTestId('button'))
    expect(testFn).toHaveBeenCalledWith('Amsterdam')
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <SearchField {...args}>
        <SearchField.Input data-testid="searchbox" name="search" placeholder="Waar ben je naar opzoek?" />
        <SearchField.Button data-testid="button" />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>
      <SearchField>
        <SearchField.Input invalid />
        <SearchField.Button />
      </SearchField>
      <SearchField>
        <SearchField.Input className="hover" invalid />
        <SearchField.Button className="hover" />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input className="hover" />
        <SearchField.Button className="hover" />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input disabled />
        <SearchField.Button disabled />
      </SearchField>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
