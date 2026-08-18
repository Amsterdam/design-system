/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Switch } from '@amsterdam/design-system-react/src'
import { switchLabelPositions } from '@amsterdam/design-system-react/src/Switch/Switch'
import { useArgs } from 'storybook/preview-api'

import { checkedArgType, childrenArgType, disabledArgType, idArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  args: {
    checked: false,
    children: 'Meldingen ontvangen',
    disabled: false,
  },
  argTypes: {
    checked: checkedArgType,
    children: childrenArgType('The text for the label.'),
    disabled: disabledArgType,
    id: idArgType,
    labelPosition: {
      control: {
        labels: { undefined: 'end (default)' },
        type: 'radio',
      },
      options: [undefined, ...switchLabelPositions.filter((position) => position !== 'end')],
    },
    onChange: {
      action: 'changed',
      table: { disable: false },
    },
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      setArgs({ checked: event.currentTarget.checked })
    }

    return <Switch onClick={handleClick} {...args} />
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LabelBeforeTheSwitch: Story = {
  args: {
    labelPosition: 'start',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
