/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { IconButton, SearchField } from '@amsterdam/design-system-react'
import type { SearchFieldProps } from '@amsterdam/design-system-react'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

type InputProps = { label?: string; placeholder?: string }
type StoryProps = SearchFieldProps & InputProps

const meta = {
  title: 'Forms/Search Field',
  component: SearchField,
  args: {
    onSubmit: (e) => {
      e.preventDefault()
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    label: {
      control: 'text',
    },
    onSubmit: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      control: 'text',
    },
  },
  render: ({ label, placeholder, ...args }) => (
    <SearchField {...args}>
      <SearchField.Input label={label} placeholder={placeholder} />
      <IconButton label="Zoeken" svg={SearchIcon} onBackground="dark" />
    </SearchField>
  ),
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Wat kunnen we voor u vinden?',
  },
}

export const Controlled: any = {
  args: {
    value: '',
  },
  render: function Component({ label, placeholder }: InputProps) {
    const [args, setArgs] = useArgs()

    const onValueChange = (event: any) => {
      setArgs({ value: event.target.value })
    }

    return (
      <SearchField
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const value = formData.get('search-box')
          // search actions should not be triggered without a value
          if (value) {
            // eslint-disable-next-line no-alert
            alert(`Gezocht op '${value}'`)
          }
        }}
      >
        <SearchField.Input
          name="search-box"
          value={args['value']}
          label={label}
          onChange={onValueChange}
          placeholder={placeholder}
        />
        <IconButton label="Zoeken" svg={SearchIcon} onBackground="dark" />
      </SearchField>
    )
  },
}
