/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { TextArea, TextAreaProps } from '@amsterdam/design-system-react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

type StoryProps = TextAreaProps & { invalid?: boolean }

const meta = {
  title: 'Forms/Text Area',
  component: TextArea,
  args: {
    children: paragraph,
    invalid: false,
  },
  argTypes: {
    resize: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
    grow: {
      control: {
        type: 'boolean',
      },
    },
    cols: {
      control: {
        type: 'number',
      },
    },
    rows: {
      control: {
        type: 'number',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
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
        <TextArea required={invalid} onChange={handleChange} {...args} />
      </form>
    )
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const VerticalResize: Story = {
  args: {
    resize: 'vertical',
  },
}

export const HorizontalResize: Story = {
  args: {
    resize: 'horizontal',
  },
}

export const Grow: Story = {
  args: {
    grow: true,
    children: 'This textarea grows with its content',
  },
}
