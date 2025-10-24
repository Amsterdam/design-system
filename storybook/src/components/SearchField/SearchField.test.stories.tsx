/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchField } from '@amsterdam/design-system-react/src'

import { default as fieldMeta } from './SearchField.stories'

const meta = {
  ...fieldMeta,
  title: 'Components/Forms/Search Field',
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

const label = 'Zoeken'
const placeholder = 'Wat kunnen we voor u vinden?'

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <SearchField {...args}>
        <SearchField.Input label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input className="hover" label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
      <SearchField invalid {...args}>
        <SearchField.Input invalid label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
