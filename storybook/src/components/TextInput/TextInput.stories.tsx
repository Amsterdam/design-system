/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextInput, TextInputProps } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

type StoryProps = TextInputProps & { invalid?: boolean }

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  args: {
    disabled: false,
    invalid: false,
    value: '',
  },
  render: ({ invalid, ...args }) => {
    const [, setArgs] = useArgs()

    const handleChange = (event: any) => {
      setArgs({ value: event.target.value })
    }

    return (
      <form>
        {/*
          Toggling the invalid control sets the required attribute on the input
          and requires it to match "ž". Wrapped in a form, this triggers the invalid state.
        */}
        <TextInput required={invalid} onChange={handleChange} {...args} />
      </form>
    )
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    placeholder: 'E-mail',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    pattern: '[ž]',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
  },
}

export const Tel: Story = {
  args: {
    type: 'tel',
  },
}

export const Url: Story = {
  args: {
    type: 'url',
  },
}
