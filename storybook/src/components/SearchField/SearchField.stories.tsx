/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { SearchField } from '@amsterdam/design-system-react/src'
import type { SearchFieldProps } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

type InputProps = {
  invalid?: boolean
  label?: string
  placeholder?: string
}

type StoryProps = SearchFieldProps & InputProps

const meta = {
  title: 'Components/Forms/Search Field',
  component: SearchField,
  args: {
    invalid: false,
    onSubmit: (e) => {
      e.preventDefault()
    },
  },
  argTypes: {
    label: {
      description: 'Describes the field for screen readers.',
    },
    onSubmit: {
      table: { disable: true },
    },
    placeholder: {
      description: 'Displayed while the field is empty.',
    },
  },
  render: ({ invalid, label, placeholder, ...args }) => (
    <SearchField {...args}>
      <SearchField.Input invalid={invalid} label={label} placeholder={placeholder} />
      <SearchField.Button />
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
  render: function Component({ invalid, label, placeholder }: InputProps) {
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
            alert(`Gezocht op '${value}'`)
          }
        }}
      >
        <SearchField.Input
          name="search-box"
          value={args['value']}
          invalid={invalid}
          label={label}
          onChange={onValueChange}
          placeholder={placeholder}
        />
        <SearchField.Button />
      </SearchField>
    )
  },
}
