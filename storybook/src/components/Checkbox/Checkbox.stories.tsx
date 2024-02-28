/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Checkbox } from '@amsterdam/design-system-react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  args: {
    checked: false,
    children: 'Checkbox label',
    disabled: false,
    indeterminate: false,
    invalid: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    onChange: { action: 'clicked' },
  },
  render: ({ ...args }) => {
    const [, setArgs] = useArgs()

    const handleClick = (event: any) => {
      setArgs({ checked: event.target.checked })
    }

    return <Checkbox onClick={handleClick} {...args} />
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongLabel: Story = {
  args: {
    children:
      'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.',
  },
}
