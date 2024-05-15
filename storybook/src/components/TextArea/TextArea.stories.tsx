/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextArea, TextAreaProps } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

type StoryProps = TextAreaProps & { invalid?: boolean }

const meta = {
  title: 'Components/Forms/Text Area',
  component: TextArea,
  args: {
    value: paragraph,
    disabled: false,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Use sparingly.',
    },
    resize: {
      control: {
        type: 'radio',
        labels: { undefined: 'default', none: 'none', horizontal: 'horizontal', vertical: 'vertical' },
      },
      options: [undefined, 'none', 'horizontal', 'vertical'],
    },
    value: {
      description: 'The value of the field.',
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

export const NoResize: Story = {
  args: {
    resize: 'none',
  },
}

export const Invalid: Story = {
  args: {
    value: '',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
