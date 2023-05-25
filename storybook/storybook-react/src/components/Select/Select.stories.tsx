/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

// import { Link } from '@amsterdam/design-system-react/src'

import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectOption } from '@utrecht/component-library-react'

import '@amsterdam/design-system-css/src/select/select.scss'

interface SelectOptions {
  value: string
  label: string
  disabled?: boolean
}

const options: SelectOptions[] = [
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
]

const meta = {
  title: 'Select',
  id: 'select',
  component: Select,
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    noscript: {
      name: 'noscript',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string' },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  render: ({ ...args }) => (
    <Select {...args}>
      {options &&
        options.length > 0 &&
        options.map(({ label, value, disabled }, index) => (
          <SelectOption key={index} value={value} disabled={disabled}>
            {label}
          </SelectOption>
        ))}
    </Select>
  ),
} satisfies Meta<typeof Select>

export default meta

export const Default: StoryObj<typeof Select> = {
  name: 'Default',
}

export const Disabled: StoryObj<typeof Select> = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
}

export const Invalid: StoryObj<typeof Select> = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
}
