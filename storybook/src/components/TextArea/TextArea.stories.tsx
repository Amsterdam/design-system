/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TextArea } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Forms/Text Area',
  component: TextArea,
  args: {
    defaultValue: paragraph,
    disabled: false,
    invalid: false,
  },
  argTypes: {
    cols: {
      control: {
        type: 'number',
      },
      description: 'The width, expressed in the average number of characters.',
    },
    defaultValue: {
      table: { disable: true },
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    resize: {
      control: {
        type: 'radio',
        labels: { undefined: 'default', none: 'none', horizontal: 'horizontal', vertical: 'vertical' },
      },
      options: [undefined, 'none', 'horizontal', 'vertical'],
    },
    rows: {
      control: {
        type: 'number',
      },
      description: 'The number of lines to show',
    },
  },
} satisfies Meta<typeof TextArea>

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
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
