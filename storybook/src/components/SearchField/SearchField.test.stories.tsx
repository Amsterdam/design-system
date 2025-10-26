/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchField } from '@amsterdam/design-system-react/src'

import { default as searchFieldMeta } from './SearchField.stories'

const meta = {
  ...searchFieldMeta,
  title: 'Components/Forms/Search Field',
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <SearchField {...args}>
        <SearchField.Input placeholder="Waar ben je naar opzoek?" />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>
      <SearchField>
        <SearchField.Input invalid />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input />
        <SearchField.Button disabled />
      </SearchField>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
