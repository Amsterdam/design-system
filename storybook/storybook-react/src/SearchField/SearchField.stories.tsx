/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SearchField } from '@amsterdam/design-system-react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Search Field',
  component: SearchField,
  args: {
    children: [<SearchField.Input key={1} />, <SearchField.Button key={2} />],
    onSubmit: (e) => {
      e.preventDefault()
    },
  },
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPlaceholder: Story = {
  args: {
    children: [
      <SearchField.Input key={1} placeholder="Wat kunnen we voor u vinden?" />,
      <SearchField.Button key={2} />,
    ],
  },
}

export const Controlled: any = {
  args: {
    value: '',
  },
  render: function Component() {
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
        <SearchField.Input name="search-box" value={args['value']} onChange={onValueChange} />
        <SearchField.Button />
      </SearchField>
    )
  },
}
