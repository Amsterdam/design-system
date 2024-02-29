/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextArea, TextAreaProps } from '@amsterdam/design-system-react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

type StoryProps = TextAreaProps & { invalid?: boolean }

const meta = {
  title: 'Components/Forms/Text Area',
  component: TextArea,
  args: {
    children: paragraph,
  },
  argTypes: {
    resize: {
      control: {
        type: 'select',
      },
      options: ['none', 'horizontal', 'vertical'],
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
        {/* Set children to empty string to trigger invalid state */}
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
    children: '',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
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
  },
}
