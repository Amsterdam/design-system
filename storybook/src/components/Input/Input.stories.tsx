/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Input, InputProps } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

type StoryProps = InputProps & { invalid?: boolean }

const meta = {
  title: 'Components/Forms/Input',
  component: Input,
  args: {
    type: 'text',
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
        <Input pattern={invalid ? '[ž]' : '.*'} required={invalid} onChange={handleChange} {...args} />
      </form>
    )
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    type: 'email',
    placeholder: 'E-mail',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const File: Story = {
  args: {
    type: 'file',
    accept: 'image/*,.pdf',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Wachtwoord',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'E-mail',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
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
